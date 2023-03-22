import React, { useState } from 'react';
import axios from 'axios';

function AddIndustryWeServe() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/industryweserve', {
        title,
        description,
        icon,
        subtitle,
        link,
      });
      console.log(response.data);
      // Reset the form
      setTitle('');
      setDescription('');
      setIcon('');
      setSubtitle('');
      setLink('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Icon URL</label>
        <input type="text" value={icon} onChange={(e) => setIcon(e.target.value)} required />
      </div>
      <div>
        <label>Subtitle</label>
        <input type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
      </div>
      <div>
        <label>Link</label>
        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default AddIndustryWeServe;
