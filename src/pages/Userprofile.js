import React from 'react'
import {
    Box,
    Flex,
    Button,
    Text,
    Stack,
    Textarea,
    FormLabel,
    FormControl,
    Select,
    InputGroup,
    InputLeftElement,
    Input,
    Wrap, Badge,
    useDisclosure,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    ModalHeader,
    Modal,
    ModalContent,
    ModalOverlay,
    InputRightElement
} from '@chakra-ui/react';
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons';
import Heatmap from '../components/Heatmap';




const Userprofile = () => {
    const [about, setAbout] = React.useState(false)
    const [aboutText, setAboutText] = React.useState('hello everyone, my name is madhav')
    const [Social, setSocial] = React.useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <div>
            {/* about me */}
            <div>
                <Box px={10} bg='gray.100'>
                    <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
                        <Box>
                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Text fontSize='lg' fontWeight='bold' align='left'>ABOUT ME</Text>
                            </Flex>
                        </Box>
                        <Flex alignItems={'center'}>
                            {about ?
                                <Button _hover={{ bg: '#f3912e' }} bg='#f3912e' color='#FFFFFF' fontSize='13px' onClick={() => { about ? setAbout(false) : setAbout(true) }}>
                                    Save
                                </Button> :
                                <Button _hover={{ bg: '#f3912e' }} bg='#f3912e' color='#FFFFFF' fontSize='13px' onClick={() => { about ? setAbout(false) : setAbout(true) }}>
                                    Edit
                                </Button>
                            }
                        </Flex>
                    </Flex>
                    <Stack spacing={3}>
                        <Textarea borderRadius="lg" value={aboutText} onChange={(e) => { about ? setAboutText(e.target.value) : setAboutText(aboutText) }}
                            border='none' _focus={{ boxShadow: "none", }}
                            bg='#FFFFFF'
                            placeholder='Add Something About You.'
                            size='sm'
                            resize="none"

                        />
                    </Stack>
                </Box>
            </div>
            <div>
                <Heatmap />
            </div>
            {/* on socilam media */}
            <div>
                <Box px={10} bg='gray.100'>
                    <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
                        <Box>
                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Text fontSize='lg' align='left' fontWeight='bold'>ON THE WEB</Text>
                            </Flex>
                        </Box>
                        <Flex alignItems={'center'}>
                            {Social ?
                                <Button _hover={{ bg: '#f3912e' }} bg='#f3912e' color='#FFFFFF' fontSize='13px' onClick={() => { Social ? setSocial(false) : setSocial(true) }}>
                                    Save
                                </Button> :
                                <Button _hover={{ bg: '#f3912e' }} bg='#f3912e' color='#FFFFFF' fontSize='13px' onClick={() => { Social ? setSocial(false) : setSocial(true) }}>
                                    Edit
                                </Button>
                            }
                        </Flex>
                    </Flex>
                    <Box width='100%'>
                        <Wrap>
                            <Stack direction={'row'} mb={4} spacing={8}>
                                <FormControl>
                                    <FormLabel>LinkedIn</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents='none'
                                            children={<img src='https://www.cipherschools.com/static/media/LinkedIn.297c3e0e0411d3b8a7946c85a72f2bc7.svg' />}
                                        />
                                        <Input bg='#FFFFFF' border='none' _focus={{ boxShadow: "none", }} htmlSize={50} width='100%' type='url' placeholder='LinkedIn' />
                                    </InputGroup>
                                </FormControl>

                                <FormControl>
                                    <FormLabel>GitHub</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents='none'
                                            children={<img src='https://www.cipherschools.com/static/media/Github.2d6b6c0c10a3b3aa7e3c7438770688f8.svg' />}
                                        />
                                        <Input bg='#FFFFFF' border='none' _focus={{ boxShadow: "none", }} htmlSize={50} width='100%' type='url' placeholder='GitHub' />
                                    </InputGroup>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>FaceBook</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents='none'
                                            children={<img src='https://www.cipherschools.com/static/media/Facebook.766939726b802e2c4354f9629feba07f.svg' />}
                                        />
                                        <Input bg='#FFFFFF' border='none' _focus={{ boxShadow: "none", }} htmlSize={50} width='100%' type='url' placeholder='FaceBook' />
                                    </InputGroup>
                                </FormControl>
                            </Stack>
                        </Wrap>
                        <Flex>
                            <Stack direction={'row'} spacing={8}>
                                <FormControl>
                                    <FormLabel>Twitter</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents='none'
                                            children={<img src='https://www.cipherschools.com/static/media/Twitter.8dec5dacebf84c0be8bcaa33dee4a7a0.svg' />}
                                        />
                                        <Input bg='#FFFFFF' border='none' _focus={{ boxShadow: "none", }} htmlSize={50} width='100%' type='url' placeholder='Twitter' />
                                    </InputGroup>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Instagram</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents='none'
                                            children={<img src='https://www.cipherschools.com/static/media/Instagram.31ac5927c40b6d948dc3369a313cb7c9.svg' />}
                                        />
                                        <Input bg='#FFFFFF' border='none' _focus={{ boxShadow: "none", }} htmlSize={50} width='100%' type='url' placeholder='Instagram' />
                                    </InputGroup>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Website</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents='none'
                                            children={<img src='https://www.cipherschools.com/static/media/Website.cd72366beefca5afbc5259237cf87838.svg' />}
                                        />
                                        <Input bg='#FFFFFF' border='none' _focus={{ boxShadow: "none", }} htmlSize={50} width='100%' type='url' placeholder='Website' />
                                    </InputGroup>
                                </FormControl>
                            </Stack>
                        </Flex>
                    </Box>
                </Box>
            </div>
            {/* professinol information */}

            <div>
                <Box px={10} bg='gray.100'>
                    <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
                        <Box>
                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Text fontSize='lg' align='left' fontWeight='bold'>PROFESSIONAL INFORMATION</Text>
                            </Flex>
                        </Box>
                        <Flex alignItems={'center'}>
                            <Button _hover={{ bg: '#f3912e' }} bg='#f3912e' color='#FFFFFF' fontSize='13px'>
                                Edit
                            </Button>
                        </Flex>
                    </Flex>

                    <Box width='100%'>
                        <Flex>
                            <Stack width='100%' direction={'row'} mb={4} spacing={10}>
                                <FormControl>
                                    <FormLabel>Highest education</FormLabel>
                                    <Select bg='#FFFFFF' border='none' _focus={{ boxShadow: "none", }} htmlSize={84} width='100%' placeholder='Highest education'>
                                        <option>Primary</option>
                                        <option>Secondary</option>
                                        <option>Higher Secondary</option>
                                        <option>Graduation</option>
                                        <option>Post Graduation</option>
                                    </Select>
                                </FormControl>

                                <FormControl>
                                    <FormLabel>What do you do currently?</FormLabel>
                                    <Select bg='#FFFFFF' border='none' _focus={{ boxShadow: "none", }} htmlSize={84} width='100%' placeholder='What do you do currently?'>
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
            {/* Password and securty */}
            <div>
                <Box px={10} bg='gray.100'>
                    <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
                        <Box>
                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Text fontSize='lg' align='left' fontWeight='bold'>PASSWORD & SECURITY</Text>
                            </Flex>
                        </Box>
                        <Flex alignItems={'center'}>
                            <Button _hover={{ bg: '#f3912e' }} bg='#f3912e' color='#FFFFFF' fontSize='13px' onClick={onOpen}>
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
                                        <Input bg='#FFFFFF' border='none' _focus={{ boxShadow: "none", }} htmlSize={50} width='100%' type='Password' placeholder='Password' />
                                    </InputGroup>
                                </FormControl>
                            </Stack>
                        </Flex>
                    </Box>
                </Box>
            </div>
            {/* intrusted  */}
            <div>
                <Box px={10} bg='gray.100'>
                    <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
                        <Box>
                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Text fontSize='lg' align='left' fontWeight='bold'>INTERESTS</Text>
                            </Flex>
                        </Box>
                        <Flex alignItems={'center'}>
                            <Button _hover={{ bg: '#f3912e' }} bg='#f3912e' color='#FFFFFF' fontSize='13px'>
                                Edit
                            </Button>
                        </Flex>
                    </Flex>
                    <Box width='100%'>
                        <Flex>
                            <Wrap width='100%' wrap='' flexWrap direction={'row'} mb={4} spacing={10}>

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
                            </Wrap>
                        </Flex>
                    </Box>
                </Box>
            </div>
            <div>
                {/* password modal */}
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalBody pb={6}>
                        <ModalHeader></ModalHeader>
                            <FormControl>
                                <FormLabel>Current Password</FormLabel>
                                <InputGroup>
                                    <Input bg='#e8f0fe' border='none' _focus={{ boxShadow: "none", }} htmlSize={50} width='100%' type={show ? 'text' : 'password'} placeholder='Password' />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                            {show ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>

                            <FormControl mt={4}>
                            <FormLabel>Current Password</FormLabel>
                            <InputGroup>
                                    <Input bg='#e8f0fe' border='none' _focus={{ boxShadow: "none", }} htmlSize={50} width='100%' type={show ? 'text' : 'password'} placeholder='Password' />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                            {show ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <FormControl mt={4}>
                            <FormLabel>Current Password</FormLabel>
                            <InputGroup>
                                    <Input bg='#e8f0fe' border='none' _focus={{ boxShadow: "none", }} htmlSize={50} width='100%' type={show ? 'text' : 'password'} placeholder='Password' />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                            {show ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                        </ModalBody>


                        <ModalFooter>
                            <Button mr={3} onClick={onClose}>Cancel</Button>
                            <Button colorScheme='blue' >
                                Save
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
        </div>
    )
}

export default Userprofile