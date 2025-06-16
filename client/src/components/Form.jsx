import { useState, useEffect, useRef } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    inquiryType: '',
    contactMethod: '',
    subscribe: false,
    notes: '',
    file: null
  });

  const [showNotes, setShowNotes] = useState(false);
  const fileInputRef = useRef(null); // used to reset the file input

  // Prefill data from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/prefill')
      .then(res => res.json())
      .then(data => {
        setFormData(prev => ({
          ...prev,
          ...data,
          phone: data.phone || '',
          address: data.address || ''
        }));
        setShowNotes(data.subscribe || false);
      });
  }, []);

  // Handle all changes
  const handleChange = e => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'checkbox') {
      setShowNotes(checked);
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'file') {
      setFormData(prev => ({ ...prev, file: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Submit form
  const handleSubmit = e => {
    e.preventDefault();

    const dataToSend = { ...formData };
    delete dataToSend.file; // skip file for now

    fetch('http://localhost:5000/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToSend)
    })
      .then(res => res.json())
      .then(() => {
        alert('Form submitted!');
        handleReset(); // reset after successful submit
      })
      .catch(console.error);
  };

  // Reset everything including file input
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      inquiryType: '',
      contactMethod: '',
      subscribe: false,
      notes: '',
      file: null
    });
    setShowNotes(false);

    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  return (
    <form className="intake-form" onSubmit={handleSubmit}>
      <h2>Digital Service Intake Form</h2>

      <label>
        Full Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Type something"
        />
      </label>

      <label>
        Email Address:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Type something"
        />
      </label>

      <label>
        Phone Number:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Type something"
        />
      </label>

      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          placeholder="Type something"
        />
      </label>

      <label>
        What are you contacting about?
        <select
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          required
        >
          <option value="">-- Select an option --</option>
          <option value="support">Support</option>
          <option value="feedback">Feedback</option>
          <option value="complaint">Complaint</option>
        </select>
      </label>

      <label>
        Preferred Contact Method:
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="contactMethod"
              value="email"
              onChange={handleChange}
              checked={formData.contactMethod === 'email'}
            />
            Email
          </label>
          <label>
            <input
              type="radio"
              name="contactMethod"
              value="phone"
              onChange={handleChange}
              checked={formData.contactMethod === 'phone'}
            />
            Phone
          </label>
          <label>
            <input
              type="radio"
              name="contactMethod"
              value="mail"
              onChange={handleChange}
              checked={formData.contactMethod === 'mail'}
            />
            Mail
          </label>
        </div>
      </label>

      <label className="checkbox">
        <input
          type="checkbox"
          name="subscribe"
          checked={formData.subscribe}
          onChange={handleChange}
        />
        Subscribe to newsletter
      </label>

      {showNotes && (
        <label>
          Notes:
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Type something"
          />
        </label>
      )}

      <label>
        Upload supporting document:
        <input
          type="file"
          name="file"
          onChange={handleChange}
          ref={fileInputRef}
        />
      </label>

      <div className="button-group">
        <button type="button" className="secondary" onClick={handleReset}>
          Reset Form
        </button>
        <button type="submit" className="primary">
          Submit Form
        </button>
      </div>
    </form>
  );
};

export default Form;
