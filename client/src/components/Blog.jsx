import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button } from '@chakra-ui/react'
import {React} from 'react'
import {useNavigate} from 'react-router-dom'

const Blogs = (props) => {
  const navigate = useNavigate()
    const showBlog = () =>{
    const _id = props.id;
    console.log(_id)
    navigate(`/blog/${_id}`)
  }
  return (
    <Card maxW='sm' marginBottom={'5%'}>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{props.heading}</Heading>
      <Text>
        {props.description ? props.description : 'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.'}
      </Text>
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
      <Button variant='solid' colorScheme='blue' margin={'auto'} width={'100%'} onClick={showBlog}>
        Read more ...
      </Button>
  </CardFooter>
</Card>
  )
}

export default Blogs