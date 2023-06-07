import { Button, Flex, Heading, chakra } from '@chakra-ui/react'
import * as React from 'react'
import { isValidMotionProp, motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const PageContainer = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp
})

interface Basic2Props {
}

const Basic2: React.FC<Basic2Props> = ({ }: Basic2Props) => {
  const navigate = useNavigate();
  React.useEffect(() => {
    console.log('Basic 2 In')
    return () => {
      console.log('Basic 2 Out')
    }
  }, [])
  return (
    <motion.div
      initial={{ opacity: 0, translateX: '100%' }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0 }}
    >
      <Flex direction='column' alignItems='center' py={10} px={10}>
        <Heading mb={10}>Basic Page 2</Heading>
        <Button w='60vw' onClick={() => navigate('/basic')}>Go to Basic 1</Button>
      </Flex>
    </motion.div>
  )
}

export default Basic2
