import React, { useState } from "react";
import "./FormPage.css";

const FormPage = () => {
  const [formData, setFormData] = useState({ name: "", aadhar: "", dob: "", gender: "", father: "", address: "", pin: "", mobile: "" });
  const [entries, setEntries] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== -1) {
      const updated = [...entries];
      updated[editIndex] = formData;
      setEntries(updated);
      setEditIndex(-1);
    } else {
      setEntries([...entries, formData]);
    }
    setFormData({ name: "", aadhar: "", dob: "", gender: "", father: "", address: "", pin: "", mobile: "" });
  };

  const handleDelete = (index) => {
    const updated = entries.filter((_, i) => i !== index);
    setEntries(updated);
  };

  const handleEdit = (index) => {
    setFormData(entries[index]);
    setEditIndex(index);
  };

  return (
    <div style={{ backgroundImage: "url('https://yourdomain.com/background2.jpg')", backgroundSize: "cover", padding: "20px" }}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
          <input name="aadhar" value={formData.aadhar} onChange={handleChange} placeholder="Aadhar Number" required maxLength="12" />
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input name="father" value={formData.father} onChange={handleChange} placeholder="Father Name" required />
          <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
          <input name="pin" value={formData.pin} onChange={handleChange} placeholder="Pin Code" required maxLength="6" />
          <input name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number" required maxLength="10" />
          <button type="submit">{editIndex !== -1 ? "Update" : "Submit"}</button>
        </form>
        <div className="display-box">
          {entries.map((entry, index) => (
            <div key={index} className="entry">
              <strong>{entry.name}</strong><br />
              Aadhar: {entry.aadhar}<br />
              <button onClick={() => handleEdit(index)}>Update</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormPage;