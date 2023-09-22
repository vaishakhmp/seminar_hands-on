import React from 'react';
import styled from 'styled-components';

// Create a styled component for a button
const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Create a styled component for a heading
const StyledHeading = styled.h1`
  font-size: 24px;
  color: #333;
`;

function App() {
  return (
    <div>
      <StyledHeading>Welcome to Styled Components</StyledHeading>
      <p>
        Styled-components allows you to style your components using tagged
        template literals.
      </p>
      <StyledButton>Click Me</StyledButton>
    </div>
  );
}

export default App;
