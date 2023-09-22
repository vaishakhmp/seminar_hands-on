import React, { useState } from 'react';

// Child component
const ChildComponent = ({ onChildButtonClick }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={() => onChildButtonClick("Data from Child")}>
        Send Data to Parent
      </button>
    </div>
  );
};

// Parent component
const ParentComponent = () => {
  const [dataFromChild, setDataFromChild] = useState(null);

  // Callback function to handle data from the child
  const handleChildButtonClick = (data) => {
    setDataFromChild(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from Child: {dataFromChild}</p>
      <ChildComponent onChildButtonClick={handleChildButtonClick} />
    </div>
  );
};

// App component
const Child2parent = () => {
  return (
    <div>
      <h1>App</h1>
      <ParentComponent />
    </div>
  );
};

export default Child2parent;