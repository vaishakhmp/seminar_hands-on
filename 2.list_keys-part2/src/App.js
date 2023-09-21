import React from 'react';

function App() {
  // Sample list of items
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  return (
    <div>
      <h1>List of Items</h1>
      <ul>
        {items.map((item) => (
          // Use the 'key' prop to assign a unique key to each list item
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
