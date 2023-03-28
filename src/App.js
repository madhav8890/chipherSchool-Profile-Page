import './App.css';
import MainLayout from './components/MainLayout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
// import Login from './components/Login'
import { ChakraProvider } from '@chakra-ui/react'
import Follower from './pages/Follower';

function App() {
  return (
    <div className="App">
      
      <ChakraProvider>
      <div >
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<MainLayout/>} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/follower" element={<Follower/>} />
        </Routes>
      </BrowserRouter>
    </div>
      {/* <Login/> */}
      
    </ChakraProvider>
  
    </div>
  );
}

export default App;
