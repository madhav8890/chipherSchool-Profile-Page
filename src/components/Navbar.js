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
      <Box bg='gray.400' px={10}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

              <Box>
                <Text fontSize='lg' align='left'>Hello</Text>
                <Heading fontSize='2xl' align='left' size='sm'>Segun Adebayo</Heading>
                <Text fontSize='lg' align='left'>Creator, Chakra UI</Text>
              </Box>
            </Flex>
          </Box>
          <Flex alignItems={'center'}>
              <Button >
                0 Follower
              </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}