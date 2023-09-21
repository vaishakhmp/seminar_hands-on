import React, { useState } from 'react';

function App() {
  const [userAge, setUserAge] = useState(null);

  const handleAgeChange = (event) => {
    setUserAge(parseInt(event.target.value));
  };

  return (
    <div className="App">
      <h1>Conditional Rendering Example</h1>

      <label>
        Enter your age: 
        <input type="number" onChange={handleAgeChange} />
      </label>

      {userAge !== null && userAge >= 18 ? (
        // Render content for users 18 and older
        <div>
          <h2>Welcome to the Adult Section</h2>
          <p>You are old enough to view this content.</p>
        </div>
      ) : userAge !== null && userAge < 18 ? (
        // Render content for users under 18
        <div>
          <h2>Welcome to the Kids Section</h2>
          <p>You must be 18 or older to view the adult content.</p>
        </div>
      ) : (
        // Default content when age is not provided
        <p>Please enter your age to continue.</p>
      )}
    </div>
  );
}

export default App;

