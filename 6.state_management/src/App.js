import React, { useState } from 'react';

// Child component
const ChildComponent = ({ message }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Message from Parent: {message}</p>
    </div>
  );
};

// Parent component
const ParentComponent = () => {
  // Define a message in the parent component's state
  const [message, setMessage] = useState("Hello from Parent!");

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={message} /> {/* Pass the message as a prop */}
    </div>
  );
};

// App component
const App = () => {
  return (
    <div>
      <h1>App</h1>
      <ParentComponent />
    </div>
  );
};

export default App;


