import './App.css';
import MainLayout from './components/MainLayout';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      
      <ChakraProvider>
      <MainLayout/>
    </ChakraProvider>
  
    </div>
  );
}

export default App;
