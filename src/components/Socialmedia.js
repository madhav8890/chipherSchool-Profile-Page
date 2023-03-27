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
    InputRightElement

} from '@chakra-ui/react';

import { PhoneIcon, CheckIcon } from '@chakra-ui/icons';

const Socialmedia = () => {
    return (
        <div>
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
                <Stack spacing={4}>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<PhoneIcon color='gray.300' />}
                        />
                        <Input type='tel' placeholder='Phone number' />
                    </InputGroup>

                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'
                            children='$'
                        />
                        <Input placeholder='Enter amount' />
                        <InputRightElement children={<CheckIcon color='green.500' />} />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<PhoneIcon color='gray.300' />}
                        />
                        <Input type='tel' placeholder='Phone number' />
                    </InputGroup>

                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'
                            children='$'
                        />
                        <Input placeholder='Enter amount' />
                        <InputRightElement children={<CheckIcon color='green.500' />} />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<PhoneIcon color='gray.300' />}
                        />
                        <Input type='tel' placeholder='Phone number' />
                    </InputGroup>

                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'
                            children='$'
                        />
                        <Input placeholder='Enter amount' />
                        <InputRightElement children={<CheckIcon color='green.500' />} />
                    </InputGroup>
                </Stack>
            </Box>
        </div>
    )
}

export default Socialmedia