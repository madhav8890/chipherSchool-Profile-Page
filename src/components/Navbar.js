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

export default function Navbar() {
  return (
    <>
      <Box bg='gray.400' bgImage={"blob:https://web.whatsapp.com/8725e229-4f26-461d-87fc-7fd6c291c9d1"} px={10}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Segun Adebayo'  src='https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png' />

              <Box>
                <Text fontSize='lg' align='left'>Hello</Text>
                <Heading fontSize='2xl' align='left' size='sm'>Madhav Prajapati</Heading>
                <Text fontSize='lg' align='left'>madhav5mar2001@gmail.com</Text>
              </Box>
            </Flex>
          </Box>
          <Flex alignItems={'center'}>
              <Text >
                0 Follower
              </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}