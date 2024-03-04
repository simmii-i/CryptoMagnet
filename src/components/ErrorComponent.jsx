import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = ({msg}) => {
  return (
    <Alert justifyContent={'center'}  status='error' position={'fixed'} bottom={'20'} left={'50%'} transform={'translateX(-50%)'} w={'container.lg'}>
      <AlertIcon/>
      {msg}
    </Alert>
  )
}

export default ErrorComponent