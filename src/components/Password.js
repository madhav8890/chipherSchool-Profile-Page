import React from 'react'
import {
    Box,
    Flex,
    Button,
    Text,
    Stack,
    InputGroup,
    InputLeftElement,
    Input,
    FormLabel,
    FormControl
} from '@chakra-ui/react';

const Password = () => {
    return (
        <div>
            <Box px={10} bg='gray.100'>
                <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Text fontSize='xl' align='left'>PASSWORD & SECURITY</Text>
                        </Flex>
                    </Box>
                    <Flex alignItems={'center'}>
                        <Button bg='#f3912e'>
                            Edit
                        </Button>
                    </Flex>
                </Flex>
                <Box width='100%'>
                    <Flex>
                        <Stack width='100%' direction={'row'} mb={4} spacing={10}>
                            <FormControl>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>                              
                                    <Input bg='#FFFFFF' htmlSize={50} width='100%' type='Password' placeholder='Password' />
                                </InputGroup>
                            </FormControl>
                        </Stack>
                    </Flex>
                </Box>
            </Box>
        </div>
    )
}

export default Password