import React from 'react'
import {
    Box,
    Flex,
    Button,
    Text,
    Stack,
    Textarea 
} from '@chakra-ui/react';
import { isDisabled } from '@testing-library/user-event/dist/utils';

const About = () => {
    const [activeText, setActiveText] = React.useState('false')
    /* Here's a custom control */
    return(
        <>
         <Box px={10}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Text fontSize='xl' align='left'>About</Text>
            </Flex>
          </Box>
          <Flex alignItems={'center'}>
              <Button value='none'>
                Edit
              </Button>
          </Flex>
        </Flex>
         <Stack spacing={3}>
         <Textarea borderRadius="lg"
        placeholder='Add Something About You.'
        size='sm'
        resize="none"
        {...activeText ?"": isDisabled}
      />
            </Stack>
      </Box>
        </>
    )

}

export default About