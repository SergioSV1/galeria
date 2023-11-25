import { Grid, Stack, HStack, Image, Box, Heading, Text, VStack, Center, Flex, background, Input, Button, IconButton} from "@chakra-ui/react";
import { SearchIcon, ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import img1 from '../img/Liv.jpeg';
import img2 from '../img/Liv2.jpeg';
import { useEffect, useRef, useState } from "react";

let contador = 0;
const Header = ({setResultados}) => {
  useEffect(()=>{
  },[])
  
  const backRef = useRef();
  const forwardRef = useRef();
  const buscarRef = useRef();
  const inputRef = useRef();
  
  
  const imagen1 = 'url("..'+img1+'")';
  const imagen2 = 'url("..'+img2+'")';
  
  
  const [image, setImage] = useState(imagen1);
  const [valor, setValor] = useState('');
  const [paginas, setPaginas] = useState(0);

 

    const busquedaRef = document.getElementById('busquedaRef');

    const buscarBoton = ()=>{
      if(inputRef.current.value != '') buscar(1);  
      
    }

    const findBack = ()=>{
      if(contador >= 2 && contador <= paginas){
        contador--
        buscar(contador)
      }
    }
    const findForw = ()=>{
      if(contador < paginas && paginas >1){
        contador++;
        buscar(contador);
      }
    }

    const buscar = async(page)=>{
      

      const API_KEY = '3F9OY_7X3a56jBdZvkRmcnRvXWMT5Ko-3ek52v69DWQ';
      const URL = 'https://api.unsplash.com/search/photos/?client_id='+ API_KEY+'&query='+ valor + '&page='+page;
      
      const response = await fetch(URL);
      const data = await response.json();
      if(contador === 0 ) contador = 1;
      setPaginas(data.total_pages);
      setResultados(data.results);
      inputRef.current.value='';
    }


  return (
    <Box background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(236,81,81,1) 0%, rgba(252,133,69,1) 100%)" placeItems="center" p={2} borderRadius='20' boxShadow= 'dark-lg' border={1} >
       <Center>
        <HStack>
        <Image
            style={{content:image}}
            borderRadius='full'
            boxSize='150px'
            objectFit='cover'
            alt='Argentina Programa'
            boxShadow= 'dark-lg' bg='white' p='1'
            onMouseEnter={() => setImage(imagen2)}
            onMouseOut={() => setImage(imagen1)} w={100}/>  
        <VStack color='white'>
              <Text fontSize='3xl'textShadow='2px 2px 8px  #000000' >GALERIA DE IMAGENES</Text>
            <HStack gap={.5}>
                  <IconButton
                   ref={buscarRef}
                    variant='outline'
                    colorScheme=''
                    aria-label='Search database'
                    icon={<SearchIcon />}
                    size='sm'
                    _hover={{background:'#73615E90'}}
                    boxShadow='0px 2px 3px 1px rgba(255,255,255,0.4)'                     
                    name='btnBuscar'
                    onClick={buscarBoton}
                  />
                <Input  placeholder='Digite su busqueda...'
                     _placeholder={{ color: '#4D4D4D' }}style={{background:'rgba(255,255,255,0.2)', outline:''}} borderRadius='5px'  paddingLeft='10px' focusBorderColor='white' size='sm'
                     boxShadow='0px 2px 3px 1px rgba(255,255,255,0.4)'
                     ref={inputRef}
                     onChange={e=>setValor(e.target.value)}
                />
            </HStack>
                <Box>
                  <HStack>
                  <IconButton
                    ref={backRef}
                    variant='outline'
                    colorScheme=''
                    aria-label='Search database'
                    icon={<ArrowBackIcon/>}
                    size='sm'
                    _hover={{background:'#73615E90'}}
                    boxShadow='0px 2px 3px 1px rgba(255,255,255,0.4)'  
                    name='btnBack'
                    onClick={findBack}            
                  />
                  <Text size='m'> {contador}/{paginas} </Text>
                  <IconButton
                  ref={forwardRef}
                    variant='outline'
                    colorScheme=''
                    aria-label='Search database'
                    icon={<ArrowForwardIcon/>}
                    size='sm'
                    _hover={{background:'#73615E90'}}
                    boxShadow='0px 2px 3px 1px rgba(255,255,255,0.4)'     
                    name='btnForward'
                    onClick={findForw}                
                  />

                  </HStack>
                </Box>
           
        </VStack>
        </HStack>
       
       </Center>
    </Box>
  )
}

export default Header