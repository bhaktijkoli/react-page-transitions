import { Button, Flex, List, ListItem } from '@chakra-ui/react'
import * as React from 'react'
import { useNavigate } from 'react-router-dom';

interface HomeProps {
}

const Home: React.FC<HomeProps> = ({ }: HomeProps) => {
  const navigate = useNavigate();
  return (
    <Flex justifyContent='center' py={10} px={10}>
      <List spacing={3}>
        <ListItem>
          <Button w='50vw' onClick={() => navigate('/basic')}>Basic</Button>
        </ListItem>
      </List>
    </Flex>
  )
}

export default Home
