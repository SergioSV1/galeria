import "./App.css";
import { Center, ChakraProvider, Box } from "@chakra-ui/react";
import theme from '../src/styles/theme';
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {


  return(
    <ChakraProvider theme={theme}>
        <Main/>
        <Footer/>        
      
    </ChakraProvider>
  )
}

export default App;
