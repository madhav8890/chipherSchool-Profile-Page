import './App.css';
import MainLayout from './components/MainLayout';
// import Login from './components/Login'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      
      <ChakraProvider>
      {/* <Login/> */}
      <MainLayout/>
    </ChakraProvider>
  
    </div>
  );
}

export default App;
