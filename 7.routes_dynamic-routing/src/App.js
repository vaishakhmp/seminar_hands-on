import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

// Sample data for different pages
const pages = [
  { id: 1, title: 'Home', content: 'Welcome to the home page!' },
  { id: 2, title: 'About', content: 'Learn more about us on the about page.' },
  { id: 3, title: 'Contact', content: 'Contact us on the contact page.' },
];

// Sample components for different pages
function Page() {
  const { id } = useParams();
  const page = pages.find((p) => p.id === parseInt(id));

  if (!page) {
    return <h2>Page not found</h2>;
  }

  return (
    <div>
      <h2>{page.title}</h2>
      <p>{page.content}</p>
    </div>
  );
}

function Navigation() {
  return (
    <nav>
      <ul>
        {pages.map((page) => (
          <li key={page.id}>
            <Link to={`/page/${page.id}`}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div>
        <h1>Simple Website</h1>
        <Navigation />
        <hr />
        <Route path="/page/:id" component={Page} />
      </div>
    </Router>
  );
}

export default App;
