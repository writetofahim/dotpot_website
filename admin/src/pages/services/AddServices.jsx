import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from '../../utils/axiosInstance';
import { RxCross1 } from "react-icons/rx";
import {FaSpinner} from "react-icons/fa"

const AddService = () => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const [technologies, setTechnologies] = useState([]);
  const [addons, setAddons] = useState([]);
  const [newTechTitle, setNewTechTitle] = useState('');
  const [newTechSdes, setNewTechSdes] = useState('');
  const [newTechIcon, setNewTechIcon] = useState('');
  const [newTechCost, setNewTechCost] = useState(0);
  const [newAddonTitle, setNewAddonTitle] = useState('');
  const [newAddonSdes, setNewAddonSdes] = useState('');
  const [newAddonIcon, setNewAddonIcon] = useState('');
  const [newAddonCost, setNewAddonCost] = useState(0);

  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get("id");

  useEffect(() => {
    if(serviceId) {
      axios.get(`/service/${serviceId}`)
      .then(({data})=>{
        console.log(data)
        setTitle(data.service.title)
        setIcon(data.service.icon);
        setTechnologies(data.service.technologies);
        setAddons(data.service.addons)
      })
    }
  
    return () => {
      
    }
  }, [])
  

  const handleTechSubmit = (e) => {
    e.preventDefault();
    setTechnologies([...technologies, { title: newTechTitle, sdes: newTechSdes, icon: newTechIcon, cost: newTechCost }]);
    setNewTechTitle('');
    setNewTechSdes('');
    setNewTechIcon('');
    setNewTechCost(0);
  };

  const handleAddonSubmit = (e) => {
    e.preventDefault();
    setAddons([...addons, { title: newAddonTitle, sdes: newAddonSdes, icon: newAddonIcon, cost: newAddonCost }]);
    setNewAddonTitle('');
    setNewAddonSdes('');
    setNewAddonIcon('');
    setNewAddonCost(0);
  };

  const handleServiceSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const newService = { title, icon, technologies, addons };
    // console.log(newService);
    if(serviceId){
      await axios.put(`/service/${serviceId}`, newService);
    } else{
      await axios.post('/service', newService);
    }
    setLoading(false);
    setTitle('');
    setIcon('');
    setTechnologies([]);
    setAddons([]);
  };

  const handleRemoveAddOn = (item) => {
    setAddons(prev=>prev.filter((addOn)=>addOn._id !== item._id))
  }

  const handleRemoveTechnology = (item) => {
    setTechnologies(prev=>prev.filter((tech)=>tech._id !== item._id))
  }
  

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleServiceSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <div className='flex justify-between items-end '>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="icon">
            Icon
          </label>
          <img className='w-10 mb-2' src={icon} alt={title} />
          </div>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="icon"
            value={icon}
            required
            onChange={(e) => setIcon(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="technologies">
            Technologies
          </label>
          <ul className="list-disc list-inside mb-4">
            {technologies.map((tech, index) => (
              <li className='flex gap-2 my-2 items-center' key={index}>
                <img className='w-5 object-contain' src={tech.icon} alt={tech.title} />
                {tech.title} ({tech.cost})
              <br />
            <small>{tech.sdes}</small>
            <RxCross1 onClick={()=>handleRemoveTechnology(tech)} className='text-sm cursor-pointer text-red-500 font-bold'/>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 mb-4 md:pr-2">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Title"
            value={newTechTitle}
            onChange={(e) => setNewTechTitle(e.target.value)}
            // required
          />
        </div>
        <div className="w-full md:w-1/2 mb-4 md:pl-2">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Icon"
            value={newTechIcon}
            onChange={(e) => setNewTechIcon(e.target.value)}
          />
        </div>
        <div className="w-full mb-4">
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Short Description"
            value={newTechSdes}
            onChange={(e) => setNewTechSdes(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/2 mb-4 md:pr-2">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Cost"
            value={newTechCost}
            onChange={(e) => setNewTechCost(Number(e.target.value))}
          />
        </div>
        <div className="w-full md:w-1/2 mb-4 md:pl-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleTechSubmit}
          >
            Add Technology
          </button>
        </div>
      </div>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="addons">
        Add-ons
      </label>
      <ul className="list-disc list-inside mb-4">
        {addons.map((addon, index) => (
          <li  className='flex gap-2 my-2 items-center' key={index}>
            <img className='w-5 object-contain' src={addon.icon} alt={addon.title} />
            {addon.title} ({addon.cost})
            <small>{addon.sdes}</small>
            <RxCross1 onClick={()=>handleRemoveAddOn(addon)} className='text-sm cursor-pointer text-red-500 font-bold'/>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 mb-4 md:pr-2">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Title"
            value={newAddonTitle}
            onChange={(e) => setNewAddonTitle(e.target.value)}
            // required
          />
        </div>
        <div className="w-full md:w-1/2 mb-4 md:pl-2">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Icon"
            value={newAddonIcon}
            onChange={(e) => setNewAddonIcon(e.target.value)}
          />
        </div>
        <div className="w-full mb-4">
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Short Description"
            value={newAddonSdes}
            onChange={(e) => setNewAddonSdes(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/2 mb-4 md:pr-2">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Cost"
            value={newAddonCost}
            onChange={(e) => setNewAddonCost(Number(e.target.value))}
          />
        </div>
        <div className="w-full md:w-1/2 mb-4 md:pl-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleAddonSubmit}
          >
            Add Add-on
          </button>
        </div>
      </div>
    </div>
    <div className="mt-4">
      <button
        disabled={loading}
        className="bg-green-500 disabled:bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center gap-2"
        type="submit"
      >
        Save Service
        {loading && <FaSpinner className="animate-spin" />}
      </button>
    </div>
  </form>
</div>
);
};

export default AddService;
