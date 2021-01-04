import React from 'react';
import ReactModal from 'react-modal';
import Routes from './Routes';
import './sass/main.scss';

ReactModal.setAppElement('#root');

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
