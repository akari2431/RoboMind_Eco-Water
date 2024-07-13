import { AuthButton } from "@bundly/ic-react";
import React, { useState } from 'react';

// Si
const Meca = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div>
      <h1>Datos del sensor</h1>
      <input
        type="text"
        value={newItem}
        onChange={handleInputChange}
        placeholder="Nueva tarea"
    
        // Boton Login
      />
      <button onClick={handleAddItem}>Agregar</button>
      
      <center><AuthButton>
        </AuthButton></center>
      
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

};

// ---> npm run start

export default Meca;
