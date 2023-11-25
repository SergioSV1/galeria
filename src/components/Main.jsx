import { Box, Flex, Image, Spacer, Wrap, WrapItem } from "@chakra-ui/react"
import Header from "./Header"
import { useState } from "react";

const Main = () => {
  const [resultados, setResultados] = useState([]);
  return (
    <Box margin='0 40px 10px 40px'>
        <Header setResultados={setResultados}/>

        <Box       
        style={{
          marginTop:'10px',
          height:'calc(100vh - 255px)',
          overflow:'auto',
        }}
       
        >
          <Wrap spacing='10px' align='center' justify='center'>
              {resultados.map((elemento,indice)=>{
                return(
                  

                  <WrapItem key={elemento.id} w='15%'>
                      <Image src={elemento.urls.regular} />
                  </WrapItem>
                  
                )
                
              })}
          </Wrap>
        </Box>
    </Box>
  )
}

export default Main