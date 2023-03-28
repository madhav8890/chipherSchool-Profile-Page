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
    FormControl,
    Select
} from '@chakra-ui/react';

const ProfacinalDetail = () => {
    return (
        <div>
            <Box px={10} bg='gray.100'>
                <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Text fontSize='xl' align='left'>PROFESSIONAL INFORMATION</Text>
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
                                <FormLabel>Highest education</FormLabel>
                                <Select bg='#FFFFFF' htmlSize={84} width='100%' placeholder='Highest education'>
                                    <option>Primary</option>
                                    <option>Secondary</option>
                                    <option>Higher Secondary</option>
                                    <option>Graduation</option>
                                    <option>Post Graduation</option>
                                </Select>
                            </FormControl>

                            <FormControl>
                                <FormLabel>What do you do currently?</FormLabel>
                                <Select bg='#FFFFFF' htmlSize={84} width='100%' placeholder='What do you do currently?'>
                                    <option>Schooling</option>
                                    <option>College Student</option>
                                    <option>Teaching</option>
                                    <option>Job</option>
                                    <option>Freelancing</option>
                                </Select>
                            </FormControl>

                        </Stack>
                    </Flex>
                    <Flex>

                    </Flex>
                </Box>
            </Box>
        </div>
    )
}

export default ProfacinalDetail