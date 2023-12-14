
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Profile from './Components/Profile';
import ChatPage from './Components/ChatPage';
import Register from './Components/UserLogin/Register';
import Login from './Components/UserLogin/Login';

function App() {
  return (
    <div > 

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/chat' element={<ChatPage />}></Route>
        {/* <Route path='/chat/:id' element={<ChatPage />}></Route> */}
        <Route path='/signup' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>

  );
}

export default App;
