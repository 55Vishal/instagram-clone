import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainContent from './Components/Instagram homePage/Main_Component/MainComponent';
import Nav from './Components/Profile/Nav';
import Profile from './Components/Profile/Profile';

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/Profile" element={<Profile />} />
        {/* <Profile />*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
