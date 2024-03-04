import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack  w={'full'} position={'fixed'} p={'4'} shadow={'base'} bgColor={'blackAlpha.900'} zIndex={'111'}  >
    <Button pl={'4'} variant={'unstyled'} color={'white'}>
       <Link to='/'>Home</Link>
    </Button> 
    <Button pl={'4'} variant={'unstyled'} color={'white'}>
       <Link to='/exchanges'>Exchanges</Link>
    </Button> 
    <Button pl={'4'} variant={'unstyled'} color={'white'}>
       <Link to='/coins'>Coins</Link>
    </Button> 
    
    </HStack>
  )
}

export default Header