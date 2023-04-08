import React, { useEffect, useState } from "react";
import axios from "../../utils/axiosInstance";
import { FaSpinner } from "react-icons/fa"
import { useSearchParams } from "react-router-dom";
import CommonSnackbar from "../../components/ComonSnackbar";
import postLogger from "../../utils/postLogger";

const AddTeam = () => {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [link, setLink] = useState("");
    const [file, setFile] = useState(null);

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [snackbar, setSnackbar] = useState(false);

    const [searchParams] = useSearchParams();
    const teamId = searchParams.get("id");


    useEffect(() => {
        if (teamId) {
            axios.get(`/team_member/${teamId}`)
                .then(res => {
                    console.log("Team member data", res.data)
                    const { image: img, name, title, email, phone,link } = res.data;
                    setName(name);
                    setTitle(title);
                    setEmail(email);
                    setLink(link);
                    setPhone(phone);
                    const preview = document.getElementById("preview");
                    const imageDiv = document.getElementById("imageDiv");
                    const image = new Image();
                    image.src = img.includes("https://") ? img : `${import.meta.env.REACT_APP_SERVER_PATH}/${img}`
                    imageDiv.classList.remove("hidden");
                    preview.innerHTML = "";
                    preview.appendChild(image);
                    postLogger({level:"info", message:res})
                })
                .catch(err => {
                    console.log(err);
                    postLogger({level:"error", message:err})
                })
        }
    }, [])

    function handleChangeImage(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            const preview = document.getElementById("preview");
            const imageDiv = document.getElementById("imageDiv");
            const image = new Image();
            image.src = reader.result;
            imageDiv.classList.remove("hidden");
            preview.innerHTML = "";
            preview.appendChild(image);
        };
        setFile(file);
    }

    const handlePostSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        let attachment;

        const newTeam = {
            name,
            title,
            email,
            phone,
            link
        }

        try {
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                const { data: resFiles } = await axios.post("/upload/blogs", formData);
                attachment = resFiles[0].filename;
                setFile(null);
                newTeam.image = attachment;
                console.log(newTeam);
                if (teamId) {
                    const { data: d } = await axios.put(`/team_member/${teamId}`, newTeam);
                    console.log(d)
                    setMessage("Team updated Successfully!")
                } else {
                    const { data } = await axios.post("/team_member", newTeam);
                    console.log(newTeam);
                    console.log(data);
                    setMessage("Team Posted Successfully!")
                    handleReset();
                }
                setLoading(false);
                setSnackbar(true);

            }
            if (!file && teamId) {
                const { data: d } = await axios.put(`/team_member/${teamId}`, newTeam);
                setMessage("team Updated Successfully!")
                setLoading(false);
                setSnackbar(true);
            }

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const handleReset = () => {
        setName("");
        setTitle("");
        setEmail("");
        setPhone("");
        setLink("")
        setFile(null);
        document.getElementById("pic").value = "";
        const imageDiv = document.getElementById("imageDiv");
        if (imageDiv) {
            imageDiv.classList.add("hidden");
        }
    }


    return (
        <div className="w-3/4 mx-auto py-5 ">
            {snackbar && <CommonSnackbar message={message} open={snackbar} setOpen={setSnackbar} />}
            <h2 className="text-xl text-center mb-5">{teamId ? "Edit" : "Add"} team member</h2>
            <form onSubmit={handlePostSubmit}>
                <label className="block text-gray-700 font-bold mb-2">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className="mb-5 w-full" type="text" placeholder="Team member name" required />
                <label className="block text-gray-700 font-bold mb-2">Title</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} className="mb-5 w-full" type="text" placeholder="Team member title" required />
                <div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Team Member Image
                        </label>
                        <input
                            type="file"
                            name="pic"
                            id="pic"
                            accept="image/*"
                            onChange={handleChangeImage}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div id="imageDiv" className="hidden">
                        <div className="w-52 h-52 bg-gray-300 rounded-md flex items-center justify-center mx-auto mb-5">
                            <div className="" id="preview"></div>
                        </div>
                    </div>
                </div>

                <label className="block text-gray-700 font-bold mb-2">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="mb-5 w-full" type="email" placeholder="Team member email" required />

                <label className="block text-gray-700 font-bold mb-2">Phone</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} className="mb-5 w-full" type="tel" placeholder="Team member phone" required />
                
                <label className="block text-gray-700 font-bold mb-2">Linkedin Link</label>
                <input value={link} onChange={(e) => setLink(e.target.value)} className="mb-5 w-full" type="text" placeholder="Linkedin Profile Link" required />

                <div className="mt-5 flex justify-center gap-5">
                    <button
                        type="submit"
                        onClick={handlePostSubmit}
                        disabled={loading}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center gap-2"
                    >
                        Submit
                        {loading && <FaSpinner className="animate-spin" />}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTeam;
