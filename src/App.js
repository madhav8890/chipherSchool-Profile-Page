import './App.css';
import MainLayout from './components/MainLayout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
// import Login from './components/Login'
import { ChakraProvider } from '@chakra-ui/react'

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
        </Routes>
      </BrowserRouter>
    </div>
      {/* <Login/> */}
      
    </ChakraProvider>
  
    </div>
  );
}

export default App;
