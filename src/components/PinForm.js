import React, { useState, useEffect, useRef } from 'react';
import './PinFormStyle.css';

const PinForm = ({ position, onSubmit, onCancel }) => {
  const [remarks, setRemarks] = useState('');
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current && position) {
      const { current: form } = formRef;
      const rect = form.getBoundingClientRect();
      const { innerHeight: windowHeight, innerWidth: windowWidth } = window;

      let top = position.y;
      let left = position.x;

      if (top + rect.height > windowHeight) {
        top = windowHeight - rect.height - 10 ;
      }
      if (left + rect.width > windowWidth) {
        left = windowWidth - rect.width - 10;
      }

      form.style.top = `${top}px`;
      form.style.left = `${left}px`;
    }
  }, [position]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(remarks);
    setRemarks('');
  };
  
  return (
    <div className="pin-form-container" ref={formRef}>
      <form className="pin-form" onSubmit={handleSubmit}>
        <textarea
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          placeholder="Enter remarks for this pin"
        />
        <div className="form-buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default PinForm;
