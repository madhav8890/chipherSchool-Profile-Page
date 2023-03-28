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

const Socialmedia = () => {
    return (
        <div>
            <Box px={10} bg='gray.100'>
                <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Text fontSize='xl' align='left'>ON THE WEB</Text>
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
                        <Stack direction={'row'} mb={4} spacing={8}>
                            <FormControl>
                                <FormLabel>LinkedIn</FormLabel>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<img src='https://www.cipherschools.com/static/media/LinkedIn.297c3e0e0411d3b8a7946c85a72f2bc7.svg' />}
                                    />
                                    <Input bg='#FFFFFF' boxShadow='sm' htmlSize={50} width='100%' type='url' placeholder='LinkedIn' />
                                </InputGroup>
                            </FormControl>

                            <FormControl>
                                <FormLabel>GitHub</FormLabel>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<img src='https://www.cipherschools.com/static/media/Github.2d6b6c0c10a3b3aa7e3c7438770688f8.svg' />}
                                    />
                                    <Input bg='#FFFFFF' htmlSize={50} width='100%' type='url' placeholder='GitHub' />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <FormLabel>FaceBook</FormLabel>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<img src='https://www.cipherschools.com/static/media/Facebook.766939726b802e2c4354f9629feba07f.svg' />}
                                    />
                                    <Input bg='#FFFFFF' htmlSize={50} width='100%' type='url' placeholder='FaceBook' />
                                </InputGroup>
                            </FormControl>
                        </Stack>
                    </Flex>
                    <Flex>
                        <Stack direction={'row'} spacing={8}>
                            <FormControl>
                                <FormLabel>Twitter</FormLabel>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<img src='https://www.cipherschools.com/static/media/Twitter.8dec5dacebf84c0be8bcaa33dee4a7a0.svg' />}
                                    />
                                    <Input bg='#FFFFFF' htmlSize={50} width='100%' type='url' placeholder='Twitter' />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Instagram</FormLabel>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<img src='https://www.cipherschools.com/static/media/Instagram.31ac5927c40b6d948dc3369a313cb7c9.svg' />}
                                    />
                                    <Input bg='#FFFFFF' htmlSize={50} width='100%' type='url' placeholder='Instagram' />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Website</FormLabel>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<img src='https://www.cipherschools.com/static/media/Website.cd72366beefca5afbc5259237cf87838.svg' />}
                                    />
                                    <Input bg='#FFFFFF' htmlSize={50} width='100%' type='url' placeholder='Website' />
                                </InputGroup>
                            </FormControl>
                        </Stack>
                    </Flex>
                </Box>
            </Box>
        </div>
    )
}

export default Socialmedia