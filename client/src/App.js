import React from 'react';
import Container from './Components/Layout/Container';

const App = () => {
  return (
    <div>
      <Container type="fluid" gutter="large" variation="flexRow" content="center">
        <h1>This is a heading</h1>
      </Container>
    </div>
  );
};

export default App;