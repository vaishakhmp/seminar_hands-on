import React, { useState } from 'react';

// Child A component
const ChildA = ({ sharedData, updateSharedData }) => {
  const handleChange = (event) => {
    updateSharedData(event.target.value);
  };

  return (
    <div>
      <h2>Child A</h2>
      <input
        type="text"
        value={sharedData}
        onChange={handleChange}
        placeholder="Type here..."
      />
    </div>
  );
};

// Child B component
const ChildB = ({ sharedData }) => {
  return (
    <div>
      <h2>Child B</h2>
      <p>Shared Data from Child A: {sharedData}</p>
    </div>
  );
};

// Parent component
const ParentComponent = () => {
  const [sharedData, setSharedData] = useState('');

  const updateSharedData = (data) => {
    setSharedData(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildA sharedData={sharedData} updateSharedData={updateSharedData} />
      <ChildB sharedData={sharedData} />
    </div>
  );
};

// App component
const Child2child = () => {
  return (
    <div>
      <h1>App</h1>
      <ParentComponent />
    </div>
  );
};

export default Child2child;
