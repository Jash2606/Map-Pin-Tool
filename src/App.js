import React, { useState, useEffect } from 'react';
import Map from './components/MapComponent';
import Sidebar from './components/Sidebar';
import { fetchAddress } from './utils/api';
import './App.css';

const App = () => {
  const [pins, setPins] = useState([]);
  const [selectedPin, setSelectedPin] = useState(null);

  useEffect(() => {
    const savedPins = JSON.parse(localStorage.getItem('pins')) || [];
    setPins(savedPins);
  }, []);

  useEffect(() => {
    localStorage.setItem('pins', JSON.stringify(pins));
  }, [pins]);

  const addPin = async (newPin) => {
    const address = await fetchAddress(newPin.position.lat, newPin.position.lng);
    const pinWithAddress = { ...newPin, address };
    setPins([...pins, pinWithAddress]);
  };

  const updatePin = (updatedPin) => {
    const updatedPins = pins.map(pin => 
      pin.id === updatedPin.id ? updatedPin : pin
    );
    setPins(updatedPins);
  };

  const selectPin = (pin) => {
    setSelectedPin(pin);
  };

  return (
    <div className="app">
      <Sidebar 
        pins={pins} 
        updatePin={updatePin} 
        selectPin={selectPin}
        selectedPin={selectedPin}
      />
      <Map 
        pins={pins} 
        addPin={addPin} 
        selectedPin={selectedPin}
        setSelectedPin={setSelectedPin}
      />
    </div>
  );
};

export default App;