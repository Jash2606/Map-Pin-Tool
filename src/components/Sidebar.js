import React, { useState } from 'react';
import './SidebarStyle.css';

const Sidebar = ({ pins, updatePin, selectPin, selectedPin }) => {
  const [editingPin, setEditingPin] = useState(null);
  const [showEditPinId, setShowEditPinId] = useState(null); 
  const handleEdit = (pin) => {
    setEditingPin(pin);
  };

  const handleSave = (pin, newRemarks) => {
    updatePin({ ...pin, remarks: newRemarks });
    setEditingPin(null);
    setShowEditPinId(null); 
  };

  const handleCancel = () => {
    setEditingPin(null);
    setShowEditPinId(null); 
  };

  return (
    <div className="sidebar">
      <h2>Saved Pins</h2>
      <ul className="pin-list">
        {pins.map((pin) => (
          <li 
            key={pin.id} 
            className={`pin-item ${selectedPin && selectedPin.id === pin.id ? 'selected' : ''}`}
            onClick={() => {
              selectPin(pin);
              setShowEditPinId(pin.id); 
            }}
          >
            {editingPin && editingPin.id === pin.id ? (
              <div className="edit-form">
                <input 
                  type="text" 
                  defaultValue={pin.remarks}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSave(pin, e.target.value);
                    }
                  }}
                />
                <button className="savebtn" onClick={() => handleSave(pin, document.querySelector('.edit-form input').value)}>Save</button>
                <button className="cancelbtn" onClick={handleCancel}>Cancel</button>
              </div>
            ) : (
              <>
                <p >
                  <strong>Remark: </strong>
                  <span className="remark-message">
                    {pin.remarks && pin.remarks.length>0 ? `${pin.remarks}` : `Remark not added yet`}    
                  </span>
                </p>
                {pin.address && <p className="address"><strong>Address: </strong>{pin.address}</p>}
                {showEditPinId === pin.id && ( 
                  <button className="editbtn" onClick={(e) => { e.stopPropagation(); handleEdit(pin); }}>Edit</button>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
