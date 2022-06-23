import './App.css';
import SidebarContainer from './container/Sidebar';
import Chats from "./container/Chats";

function App() {
  return (
    <div className="app">
      <div className='app__body'>
        <SidebarContainer />
        <Chats />
      </div>
    </div>
  );
}

export default App;
