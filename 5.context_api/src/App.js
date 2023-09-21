import React, { createContext, useState } from 'react';

// Step 1: Create a context with a default value
const ThemeContext = createContext('light');

// Step 2: Create a provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Step 3: Create a component that uses the context
function ThemedComponent() {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <div style={{ backgroundColor: context.theme === 'light' ? '#fff' : '#000', color: context.theme === 'light' ? '#000' : '#fff', padding: '10px', borderRadius: '5px' }}>
          <p>Current Theme: {context.theme}</p>
          <button onClick={context.toggleTheme}>Toggle Theme</button>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

// Step 4: Use the provider and components
function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Theme Toggle App</h1>
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;

