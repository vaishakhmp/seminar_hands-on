import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

// Home component
const Home = () => (
  <div>
    <h2>Home Page</h2>
    <p>Welcome to the home page.</p>
  </div>
);

// Contact component
const Contact = () => (
  <div>
    <h2>Contact Page</h2>
    <p>You can contact us here.</p>
  </div>
);

// App component
const App = () => (
  <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;



