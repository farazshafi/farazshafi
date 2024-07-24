import {
    Container,
    Flex,
    Box,
    Text,
    Button,
    VStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Stack,
    InputLeftAddon,
    useClipboard,
} from "@chakra-ui/react";
import {
    MdOutlineEmail,
} from 'react-icons/md'
import {BsPerson } from 'react-icons/bs'
import React from "react";
import SectionHead from "./SectionHead";
import GetInTouch from "./GetInTouch"
import { useState } from "react";
import { useToast } from "@chakra-ui/react"; // Added for toast notifications



const ContactForm = () => {

    const defaultNumberValue = '9188773788';
    const defaultEmailValue = 'farazpachu777@gmail.com';
    const defaultLocationValue = 'Kasaragod, Kerala, India';

    const { onCopy: onCopyNumber, value: numberValue, hasCopied: hasCopiedNumber } = useClipboard(defaultNumberValue);
    const { onCopy: onCopyEmail, value: emailValue, hasCopied: hasCopiedEmail } = useClipboard(defaultEmailValue);
    const { onCopy: onCopyLocation, value: locationValue, hasCopied: hasCopiedLocation } = useClipboard(defaultLocationValue);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const toast = useToast();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formUrl = "https://api.web3forms.com/submit";
        const accessKey = "1d9221ef-f0c7-48bd-bfea-5f565822b14f";
      
        const data = {
          access_key: accessKey,
          ...formData
        };
      
        try {
          const response = await fetch(formUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
      
          if (response.ok) {
            toast({
              title: "Message sent.",
              description: "Your message has been sent successfully.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
            setFormData({ name: '', email: '', message: '' });
          } else {
            throw new Error('Error sending message');
          }
        } catch (error) {
          toast({
            title: "Error.",
            description: "There was an error sending your message. Please try again later.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      };
      

    return (
        <>
            <Box
                width={"100%"}
                bgColor={"white"}
                pl={{ lg: "120px", base: "5%" }}
                pr={{ lg: "120px", base: "5%" }}
                pt={{ lg: "25px", base: "4px", md: "5px" }}
                pb={{ lg: "50px", base: "15px", md: "20px" }}
            >
                <SectionHead center={true} i={"contact-form"} color={"black"} text={"CONTACT FORM"} />
                <Container maxW="full" mt={0} centerContent overflow="hidden">
                    <Flex>
                        <Box
                            bg="#174963"
                            color="white"
                            borderRadius="lg"
                            m={{ sm: 4, md: 16, lg: 10 }}
                            p={{ sm: 5, md: 5, lg: 16 }}>
                            <Box p={4}>
                                <Wrap spacing={{ base: 5, sm: 3, md: 5, lg: 20 }}>
                                    <WrapItem>
                                        <Box>
                                            <Text fontSize={{ lg: "30px", base: "20px" }}>Contact</Text>
                                            <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.300">
                                                Fill up the form below to contact
                                            </Text>
                                            <GetInTouch />
                                            <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                                {/* details */}
                                                <Box>
                                                    <Stack>
                                                        {/* number */}
                                                        <Box>
                                                            <Flex mb={2}>
                                                                <InputGroup width={{ base: "215px", lg: "400px", md: "300px" }} size={{ base: "xs", md: "md", lg: "lg" }}>
                                                                    <InputLeftAddon color={"black"} children='+91' />
                                                                    <Input
                                                                        color={'white'}
                                                                        width={"80%"}
                                                                        value={numberValue}
                                                                        readOnly // Make the input read-only
                                                                    />
                                                                    <Box
                                                                        ml={"3px"}
                                                                        display={'flex'}
                                                                        alignItems={'center'}
                                                                        justifyContent={'center'}
                                                                        bgColor={'white'}
                                                                        width={'45px'}
                                                                        borderRadius={5}
                                                                    >
                                                                        <i style={{ fontSize: '20px', textAlign: 'center', color: 'black' }} onClick={onCopyNumber} className={hasCopiedNumber ? 'fa-solid fa-copy' : 'fa-regular fa-copy'}></i>
                                                                    </Box>
                                                                </InputGroup>
                                                            </Flex>
                                                        </Box>
                                                        {/* email */}
                                                        <Box>
                                                            <Flex mb={2}>
                                                                <InputGroup width={{ base: "215px", lg: "400px", md: "300px" }} size={{ base: "xs", md: "md", lg: "lg" }}>
                                                                    <Input
                                                                        color={'white'}
                                                                        value={emailValue}
                                                                        readOnly // Make the input read-only
                                                                    />
                                                                    <Box
                                                                        ml={"3px"}
                                                                        display={'flex'}
                                                                        alignItems={'center'}
                                                                        justifyContent={'center'}
                                                                        bgColor={'white'}
                                                                        width={'45px'}
                                                                        borderRadius={5}
                                                                    >
                                                                        <i style={{ fontSize: '20px', textAlign: 'center', color: 'black' }} onClick={onCopyEmail} className={hasCopiedEmail ? 'fa-solid fa-copy' : 'fa-regular fa-copy'}></i>
                                                                    </Box>
                                                                </InputGroup>
                                                            </Flex>
                                                        </Box>
                                                        {/* location */}
                                                        <Box>
                                                            <Flex mb={2}>
                                                                <InputGroup width={{ base: "215px", lg: "400px", md: "300px" }} size={{ base: "xs", md: "md", lg: "lg" }}>
                                                                    <Input
                                                                        color={'white'}
                                                                        value={locationValue}
                                                                        readOnly // Make the input read-only
                                                                    />
                                                                    <Box
                                                                        ml={"3px"}
                                                                        display={'flex'}
                                                                        alignItems={'center'}
                                                                        justifyContent={'center'}
                                                                        bgColor={'white'}
                                                                        width={'45px'}
                                                                        borderRadius={5}
                                                                    >
                                                                        <i style={{ fontSize: '20px', textAlign: 'center', color: 'black' }} onClick={onCopyLocation} className={hasCopiedLocation ? 'fa-solid fa-copy' : 'fa-regular fa-copy'}></i>
                                                                    </Box>
                                                                </InputGroup>
                                                            </Flex>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            </Box>

                                        </Box>
                                    </WrapItem>
                                    <WrapItem>
                                        <Box bg="white" borderRadius="lg">
                                            <Box m={8} color="#0B0E3F">
                                                {/* chatGpt */}
                                                <form onSubmit={handleSubmit}>
                                                    <VStack spacing={5}>
                                                        <FormControl id="name">
                                                            <FormLabel>Your Name</FormLabel>
                                                            <InputGroup borderColor="#E0E1E7">
                                                                <InputLeftElement pointerEvents="none">
                                                                    <BsPerson color="gray.800" />
                                                                </InputLeftElement>
                                                                <Input type="text" id="name" size="md" value={formData.name} onChange={handleChange} />
                                                            </InputGroup>
                                                        </FormControl>
                                                        <FormControl id="email">
                                                            <FormLabel>Mail</FormLabel>
                                                            <InputGroup borderColor="#E0E1E7">
                                                                <InputLeftElement pointerEvents="none">
                                                                    <MdOutlineEmail color="gray.800" />
                                                                </InputLeftElement>
                                                                <Input type="email" id="email" size="md" value={formData.email} onChange={handleChange} />
                                                            </InputGroup>
                                                        </FormControl>
                                                        <FormControl id="message">
                                                            <FormLabel>Message</FormLabel>
                                                            <Textarea
                                                                id="message"
                                                                borderColor="gray.300"
                                                                _hover={{
                                                                    borderRadius: 'gray.300',
                                                                }}
                                                                placeholder="message"
                                                                value={formData.message}
                                                                onChange={handleChange}
                                                            />
                                                        </FormControl>
                                                        <FormControl float="right">
                                                            <Button type="submit" variant="solid" bg="#0D74FF" color="white">
                                                                Send Message
                                                            </Button>
                                                        </FormControl>
                                                    </VStack>
                                                </form>

                                            </Box>
                                        </Box>
                                    </WrapItem>
                                </Wrap>
                            </Box>
                        </Box>
                    </Flex>
                </Container>

            </Box>
        </>
    )
}
export default ContactForm