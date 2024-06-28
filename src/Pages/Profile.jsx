import React, { useState } from 'react';

export const Profile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0]; 
    setSelectedFile(file);
  };

  return (
    <div>
      <h2>Image Picker</h2>
      <input
        type="file"
        accept="image/*" 
        onChange={handleFileChange}
      />
      {selectedFile && (
        <div>
          <p>Selected file: {selectedFile.name}</p>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected"
            style={{ maxWidth: '100%', maxHeight: '200px' }} 
          />
        </div>
      )}
    </div>
  );
};