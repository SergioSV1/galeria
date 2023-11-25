import { Box, Flex, Image } from "@chakra-ui/react"
import img1 from '../img/Logos_login.jpg';
const Footer = () => {
  return (
   <Box
   position='absolute'
   background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(236,81,81,1) 0%, rgba(252,133,69,1) 100%)" placeItems="center" p={3} boxShadow= 'dark-lg' border={1}
   
   width='100%'
   height='80px'
   bottom='0'
   flex='center'
   >
    <Flex align='center' justify='center'>
      <Image src={img1} h='65' boxShadow ='2px 5px 15px rgba(0,0,0,0.6)' borderRadius={10}/>
    </Flex>
   </Box>
  )
}

export default Footer