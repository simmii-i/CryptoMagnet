import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Container, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import Loader from './Loader'
import ErrorComponent from './ErrorComponent'


const Exchanges = () => {

 const [exchanges,setExchanges] = useState([])
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(false);
 
 useEffect(() => {
    
    const fetchExchanges = async() =>{
      try {
        const {data} = await axios.get(`${server}/exchanges`);
   
      
      setExchanges(data);
      console.log(data);
      setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }
   fetchExchanges();
  }, []);
  
  if (error) return <ErrorComponent msg={'Error while fetching'} />;
  return (
    <Container maxW={'container.xl'} >

    {loading ? <Loader/> : <> 
       
       <HStack wrap={'wrap'} justifyContent={'space-evenly'} >
        {
          exchanges.map((i)=> (
            <ExchangeCard key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank} />
          ))
        }
       </HStack>

    </>}
    
    </Container>

  )
}

const ExchangeCard = ({key,name,img,rank})=>(
  <>
    <VStack w={'52'} shadow={'lg'} p={'8'} borderRadius={'lg'} transition={'all 0.3s'} m={'4'} css={{
      '&:hover':{
        transform:'scale(1.1)'
      }
    }} >
      <Image src={img} w={'10'} h={'10'} objectFit={'contain'} alt='exchange'/>
      <Heading size={'md'} noOfLines={1}>
        {rank}
      </Heading>
      <Text noOfLines={1} >{name}</Text>
    </VStack>
  </>

)

export default Exchanges