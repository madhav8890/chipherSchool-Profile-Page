import React from 'react'
import {
    Box,
    Flex,
    Button,
    Text,
    Stack,
    Badge

} from '@chakra-ui/react';

const Intrest = () => {
    return (
        <div>
            <Box px={10} bg='gray.100'>
                <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Text fontSize='xl' align='left'>INTERESTS</Text>
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
                        <Stack width='100%' flexWrap direction={'row'}  mb={4} spacing={10}>
                            <Badge ml='1' fontSize='0.8em' p='10px' color='#f3912e' borderRadius='5px' bg='#f2ebe6'>
                            Web Development
                            </Badge>
                            <Badge ml='1' fontSize='0.8em' p='10px' color='#f3912e' borderRadius='5px' bg='#f2ebe6'>
                            App Development
                            </Badge>
                            <Badge ml='1' fontSize='0.8em' p='10px' color='#f3912e' borderRadius='5px' bg='#f2ebe6'>
                            Machine Learning
                            </Badge>
                            <Badge ml='1' fontSize='0.8em' p='10px' color='#f3912e' borderRadius='5px' bg='#f2ebe6'>
                            Data Structures
                            </Badge>
                            <Badge ml='1' fontSize='0.8em' p='10px' color='#f3912e' borderRadius='5px' bg='#f2ebe6'>
                            Programming
                            </Badge>
                            <Badge ml='1' fontSize='0.8em' p='10px' color='#f3912e' borderRadius='5px' bg='#f2ebe6'>
                            Data Science
                            </Badge>
                        </Stack>
                    </Flex>
                </Box>
            </Box>
        </div>
    )
}

export default Intrest