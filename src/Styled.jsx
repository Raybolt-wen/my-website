import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #2e86c1;
  }
`;

const MyComponent = () => {
  return (
    <div>
      <p>Some text here.</p>
      <StyledButton>Click me</StyledButton>
    </div>
  );
};
