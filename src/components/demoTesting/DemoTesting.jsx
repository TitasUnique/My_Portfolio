import React, { useState } from 'react';

const DemoTesting = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestedNames, setSuggestedNames] = useState([]);
  const [selectedNames, setSelectedNames] = useState([]);

  const allNames = ["John", "Jane", "Alex", "Avi", "David", "Olivia", "Alice", "Bob"];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter names based on the input value
    const filteredNames = allNames.filter(name =>
      name.toLowerCase().includes(value.toLowerCase())
    ).sort();

    setSuggestedNames(filteredNames);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace' && inputValue === '' && selectedNames.length > 0) {
      // Handle backspace to remove the last selected name
      const updatedNames = [...selectedNames];
      updatedNames.pop();
      setSelectedNames(updatedNames);
    } else if (e.key === 'Enter' && inputValue.trim() !== '') {
      // Handle Enter to add the current input value to selected names
      setSelectedNames([...selectedNames, inputValue.trim()]);
      setInputValue('');
      setSuggestedNames([]);
    }
  };

  const handleSuggestedNameClick = (name) => {
    // Add a suggested name to the selected names
    setSelectedNames([...selectedNames, name]);
    setInputValue('');
    setSuggestedNames([]);
  };

  const handleRemoveChip = (index) => {
    // Remove a chip by index
    const updatedNames = [...selectedNames];
    updatedNames.splice(index, 1);
    setSelectedNames(updatedNames);
  };

  return (
    <div>
      <div className="chip-container">
        {selectedNames.map((name, index) => (
          <div key={index} className="chip">
            <div className="avatar">A</div>
            {name}
            <span className="close" onClick={() => handleRemoveChip(index)}>&times;</span>
          </div>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={`Type a name${selectedNames.length > 0 ? ' or select from chips' : ''}`}
        />
      </div>

      {suggestedNames.length > 0 && (
        <ul className="suggested-list">
          {suggestedNames.map((name, index) => (
            <li key={index} onClick={() => handleSuggestedNameClick(name)}>
              <div className="avatar">A</div>
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DemoTesting;
