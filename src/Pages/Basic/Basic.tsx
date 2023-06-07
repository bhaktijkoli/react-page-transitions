import { Button, Flex, Heading, chakra } from '@chakra-ui/react'
import * as React from 'react'
import { useNavigate } from 'react-router-dom';
import { isValidMotionProp, motion } from "framer-motion";

const PageContainer = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp
})

interface BasicProps {
}

const Basic: React.FC<BasicProps> = ({ }: BasicProps) => {
  const navigate = useNavigate();
  React.useEffect(() => {
    console.log('Basic 1 In')
    return () => {
      console.log('Basic 1 Out')
    }
  }, [])
  return (
    <motion.div
      initial={{ opacity: 0, translateX: '100%' }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0 }}
    >
      <Flex direction='column' alignItems='center' py={10} px={10} bg='red'>
        <Heading mb={10}>Basic Page 1</Heading>
        <Button w='60vw' onClick={() => navigate('/basic2')}>Go to Basic 2</Button>
      </Flex>
    </motion.div>
  )
}

export default Basic
