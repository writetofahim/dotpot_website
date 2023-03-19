import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { jobPageData, inputFields } from '../../data';
import { BsArrowRight } from "react-icons/bs"
import { FaSpinner } from "react-icons/fa";
import NavbarJob from '../../components/NavbarJob/NavbarJob';
import axios from '../../utils/axiosInstance';
import ApplyJobSuccessModal from './ApplyJobSuccessModal';


export const InputFields = ({ title, placeholder, type, name, required }) => {
    return (
        <div className="mt-1 text-gray-400">
            <label htmlFor={name}>{title}: </label> <br />
            <input className='p-2 rounded border w-full outline-none' type={type} name={name} id={name} placeholder={placeholder} required={required} />
        </div>
    )
}

const Apply = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    let { id } = useParams();

    // Data Fetching
    useEffect(() => {
        axios.get(`/job/${id}`)
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);


    // post job application data to server
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            setIsLoading(true);
            let resume;
            const filesArray = Array.from(e.target.cv.files);

            const formData = new FormData();
            filesArray.forEach(file => {
                formData.append('files[]', file);
            });
            const { data: resFiles } = await axios.post("/upload/resumes", formData)
            resume = resFiles[0].filename;

            const application = {
                jobId: data._id,
                companyName: data.company,
                jobTitle: data.title,
                name: e.target.name.value,
                email: e.target.email.value,
                phone: e.target.number.value,
                resume: resume,
                address: e.target.address.value,
                education: e.target.education.value,
                experience: e.target.experience.value,
                coverLetter: e.target.coverLetter.value,
            }
            console.log(data);
            const { data: resData } = await axios.post("/job_application", application);
            setIsLoading(false);
            setOpenModal(true)
            e.target.reset();

        } catch (error) {
            console.log(error);
            if (error.response?.data?.errors?.msg) {
                setError(error.response.data.errors.msg);
            } else {
                setError(error.message);
            }
            setIsLoading(false);
        }


    }
    return (
        <>
            <NavbarJob />
            {openModal && <ApplyJobSuccessModal openModal={openModal} setOpenModal={setOpenModal} />}
            <div className='w-full flex items-center justify-center overflow-x-hidden' >
                <div className="w-full max-w-[1400px] container p-5 flex flex-col items-center">
                    <h1 className="text-3xl text-primary-500 font-bold mb-10">Apply Now for {data && data.title}</h1>
                    <form onSubmit={handleSubmit} className='md:w-3/5 border rounded-xl p-5 shadow-lg mb-5'>
                        <h3 className="text-xl text-center mb-3">{data && data.title}</h3>
                        {
                            inputFields.map((item, index) => (
                                <InputFields key={index} {...item} />
                            ))
                        }
                        <div className="mt-1 text-gray-400">
                            <label htmlFor="cover">Cover Latter: </label> <br />
                            <textarea name="coverLetter" id="cover" rows="5" className='p-2 border w-full outline-none'></textarea>
                        </div>
                        {error && <p className='text-red-500'>{error}</p>}
                        <button disabled={isLoading} variant="contained" className='bg-primary-500 px-10 py-3 text-white rounded-sm hover:bg-secondary-500 font-bold mt-2 flex items-center gap-3'>
                            Submit Now  {isLoading ? <FaSpinner className="animate-spin" /> : <BsArrowRight />}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Apply