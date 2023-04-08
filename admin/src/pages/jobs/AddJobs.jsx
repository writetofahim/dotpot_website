import React, { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import CommonSnackbar from '../../components/ComonSnackbar';
import axios from "../../utils/axiosInstance";
import postLogger from '../../utils/postLogger';

function JobPostingForm() {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [salaryMin, setSalaryMin] = useState(20000);
  const [salaryMax, setSalaryMax] = useState(100000);
  const [qualifications, setQualifications] = useState([]);
  const [responsibilities, setResponsibilities] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [howToApply, setHowToApply] = useState('');
  const [benefits, setBenefits] = useState([]);
  const [isRemote, setIsRemote] = useState(false);

  const [isFullTime, setIsFullTime] = useState(true);
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const jobId = searchParams.get("id");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    // if has job id as query parameter then fetch job details
    if (jobId) {
      axios.get(`/job/${jobId}`)
        .then(res => {
          const {
            title,
            company,
            location,
            description,
            salary,
            qualifications,
            responsibilities,
            experience,
            education,
            howToApply,
            benefits,
            isRemote,
            isFullTime
          } = res.data;

          console.log(res.data)
          postLogger({level:"info", message:res})

          setTitle(title);
          setCompany(company);
          setLocation(location);
          setDescription(description);
          setSalaryMin(salary.min);
          setSalaryMax(salary.max);
          setQualifications(qualifications);
          setResponsibilities(responsibilities);
          setExperience(experience);
          setEducation(education);
          setHowToApply(howToApply);
          setBenefits(benefits);
          setIsRemote(isRemote);
          setIsFullTime(isFullTime);
        })
        .catch(err => {
          console.log(err);
          postLogger({level:"error", message:err})
        })
    }
  }, [jobId]);


  // handle submit for add or update job
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    const formData = {
      title,
      company,
      location,
      description,
      salary: {
        min: salaryMin,
        max: salaryMax,
      },
      qualifications,
      responsibilities,
      experience,
      education,
      howToApply,
      benefits,
      isRemote,
      isFullTime,
    };
    // Send POST request to server with formData
    if (jobId) {
      console.log(formData)
      const response = await axios.put(`/job/${jobId}`, formData);
      if (response.status === 200) {
        setMessage("Job updated successfully!")
        setOpen(true);
        resetForm();
      }
      setLoading(false)
      postLogger({level:"info", message:response})
    } else {
      console.log(formData)
      const response = await axios.post('/job', formData);
      if (response.status === 200) {
        setMessage("Job posted successfully!")
        setOpen(true);
        resetForm();
      }
      setLoading(false);
      postLogger({level:"info", message:response})
    }

  };

  // reset form values 
  const resetForm = () => {
    setTitle('');
    setCompany('');
    setLocation('');
    setDescription('');
    setSalaryMin(20000);
    setSalaryMax(100000);
    setQualifications([]);
    setResponsibilities([]);
    setExperience([]);
    setEducation('');
    setHowToApply('');
    setBenefits([]);
    setIsRemote(false);
    setIsFullTime(true);
  };

  return (
    <>
      {open && <CommonSnackbar message={message} open={open} setOpen={setOpen} />}
      <h2 className="text-xl text-center mb-5">{jobId ? "Update" : "Add"} Job</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block font-bold mb-2">
            Title:
          </label>
          <input
            required
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="company" className="block font-bold mb-2">
            Company:
          </label>
          <input
            required
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block font-bold mb-2">
            Location:
          </label>
          <input
            required
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block font-bold mb-2">
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="salary-min" className="block font-bold mb-2">
            Salary Min:
          </label>
          <input
            required
            type="number"
            id="salary-min"
            value={salaryMin}
            onChange={(e) => setSalaryMin(e.target.value)}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="salary-max" className="block font-bold mb-2">
            Salary Max:
          </label>
          <input
            required type="number"
            id="salary-max"
            value={salaryMax}
            onChange={(e) => setSalaryMax(e.target.value)}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="qualifications" className="block font-bold mb-2">
            Qualifications:
          </label>
          <textarea
            id="qualifications"
            value={qualifications}
            onChange={(e) => setQualifications(e.target.value.split(','))}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="responsibilities" className="block font-bold mb-2">
            Responsibilities:
          </label>
          <textarea
            id="responsibilities"
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value.split(','))}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="experience" className="block font-bold mb-2">
            Experience:
          </label>
          <textarea
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value.split(','))}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="experience" className="block font-bold mb-2">
            Eduction:
          </label>
          <textarea
            id="experience"
            value={education}
            onChange={(e) => setEducation(e.target.value.split(','))}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="howToApply" className="block font-bold mb-2">
            How to Apply:
          </label>
          <textarea
            id="howToApply"
            value={howToApply}
            onChange={(e) => setHowToApply(e.target.value)}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="benefits" className="block font-bold mb-2">
            Benefits:
          </label>
          <textarea
            id="benefits"
            value={benefits}
            onChange={(e) => setBenefits(e.target.value.split(','))}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>

        <div className='flex gap-2'>
          <div className="mb-4 flex-1">
            <label htmlFor="isRemote" className="block font-bold mb-2">
              Is Remote:
            </label>
            <input

              type="checkbox"
              id="isRemote"
              checked={isRemote}
              onChange={(e) => setIsRemote(e.target.checked)}
            />
          </div>

          <div className="mb-4 flex-1">
            <label htmlFor="isFullTime" className="block font-bold mb-2">
              Is Full Time:
            </label>
            <input

              type="checkbox"
              id="isFullTime"
              checked={isFullTime}
              onChange={(e) => setIsFullTime(e.target.checked)}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center gap-2 mb-5"
        >
          Submit
          {loading && <FaSpinner className="animate-spin" />}
        </button>
      </form></>);
}

export default JobPostingForm