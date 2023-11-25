import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    styles: {
      global: (props) => ({
        'body': {
          margin:0,
          padding:0,
          minH:'100vh',
        },
        'html':{
          position:'relative',
          maxW:'1280px',
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        },
        a: {
          color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
        },
      }),
    },
  })


export default theme;