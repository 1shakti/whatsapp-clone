import './App.css';
import SidebarContainer from './container/Sidebar';
import Chats from "./container/Chats";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className='app__body'>
        <Router>
          <SidebarContainer />
          <Routes>
            <Route path="/room/:roomId" element={<Chats />} />
            <Route path="/" element={<Chats />} />
          </Routes>  
        </Router>
      </div>
    </div>
  );
}

export default App;
