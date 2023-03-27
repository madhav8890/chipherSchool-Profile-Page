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
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={10}>
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
              <Button onClick={toggleColorMode}>
                0 Follower
              </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}