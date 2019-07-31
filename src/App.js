import React from 'react';
import { DndProvider } from 'react-dnd'
import HTML5BACKEND from 'react-dnd-html5-backend'
import GlobalStyled from './styles/global'
import Header from './components/Header'
import Board from './components/Board'
import { from } from 'rxjs';

function App() {
  return (
    <DndProvider backend={HTML5BACKEND}>
      <Header />
      <Board />
      <GlobalStyled />
    </DndProvider>
  );
}

export default App;
