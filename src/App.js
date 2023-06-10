import React from 'react'
import Ticket from './Ticket/Ticket'
import Header from './Ticket/Header'
import { Container } from 'semantic-ui-react'
import './App.css';

function App() {
  return (
    <Container>
      <Header />
        <Ticket />
        </Container>
  );
}

export default App;
