import {
  Box,
  Flex,
  Avatar,
  Button,
  useColorModeValue,
  useColorMode,
  Heading,
  Text
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Navbar(props) {
  const navigate = useNavigate();

  return (
    <>
      <Box  bgImage={"https://i.ibb.co/mH8zhXm/imagessds.jpg"} px={10}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Segun Adebayo' onClick={()=>{ navigate('/profile');}}   src='https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png' />

              <Box>
                <Text fontSize='lg' align='left'>Hello</Text>
                <Heading fontSize='2xl' align='left' size='sm'>Madhav Prajapati</Heading>
                <Text fontSize='lg' align='left'>madhav5mar2001@gmail.com</Text>
              </Box>
            </Flex>
          </Box>
          <Flex alignItems={'center'}>
              <Text cursor={'pointer'} onClick={()=>{ navigate('/follower');}} >
                2 Followers
              </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}