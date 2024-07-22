import React from 'react'
import { Box, Flex, Image, Input, InputGroup, InputLeftAddon, Stack, Text, useClipboard } from '@chakra-ui/react';
import profile from "../images/profile circle.png"
import SectionHead from './SectionHead';

const About = () => {

    const defaultNumberValue = '9188773788';
    const defaultEmailValue = 'farazpachu777@gmail.com';
    const defaultLocationValue = 'Kasaragod, Kerala, India';

    const { onCopy: onCopyNumber, value: numberValue, hasCopied: hasCopiedNumber } = useClipboard(defaultNumberValue);
    const { onCopy: onCopyEmail, value: emailValue, hasCopied: hasCopiedEmail } = useClipboard(defaultEmailValue);
    const { onCopy: onCopyLocation, value: locationValue, hasCopied: hasCopiedLocation } = useClipboard(defaultLocationValue);

    return (
        <>
            <SectionHead i={"about"} center={false} text={"WHO IS ME ?"} />
            <Box
                display="flex"
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Box
                    width={{ lg: "275px", base: "110px", md: "170px" }}
                >
                    <Image
                        src={profile}
                    />
                </Box>
            </Box>
            <Box
                pl={{ lg: "123px" }}
                pr={{ lg: "123px" }}
                mt={{ lg: "-137.5px", base: "-54.5px", md: "-83.5px" }}
            >
                <Box
                    bgColor={"#164863"}
                    pl={{ lg: "117px", base: "40px", md: "80px" }}
                    pb={{ lg: "40px" }}
                    pr={{ lg: "117px", base: "40px", md: "80px" }}
                >
                    <Box
                        textAlign={"center"}
                        pt={{ lg: "155px", base: "60px", md: "90px" }}
                        mb={{ lg: "25px", base: "10px" }}
                    >
                        <Text
                            fontFamily={"Poppins"}
                            fontSize={{ lg: "30px", base: "15", md: "20px" }}
                            color={"white"}
                            fontWeight={800}
                        >
                            Faraz shafi
                        </Text>
                        <Text
                            fontFamily={"Poppins"}
                            fontSize={{ lg: "25px", base: "10px", md: "13px" }}
                            color={"white"}
                        >
                            Full stack Developer
                        </Text>
                    </Box>
                    {/* about div */}
                    <Box
                        bgColor={"white"}
                        borderRadius={{ lg: "45px", base: "17px" }}
                        pt={{ lg: "35px", base: "10px" }}
                        pb={{ lg: "35px", base: "10px" }}
                        pr={{ lg: "33px", base: "10px" }}
                        pl={{ lg: "33px", base: "10px" }}
                    >
                        <Text
                            fontFamily={"Timmana"}
                            fontSize={{ lg: "45px", base: "17px", md: "20px" }}
                        >
                            ABOUT
                        </Text>
                        <Text
                            fontFamily={"Sniglet"}
                            fontSize={{ lg: "20px", base: "13px", md: "12px" }}
                        >
                            I'm a self-taught MERN web developer passionate about crafting userfriendly web applications. With a focus on clean, efficient code and a commitment to staying current with industry trends, I thrive in collaborative environments. My goal is to contribute my expertise to innovative projects and help businesses succeed in the digital world.
                        </Text>
                    </Box>
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        mt={{ lg: "25px", base: "10px" }}
                    >
                        {/* details */}
                        <Box>
                            <Stack>
                                {/* number */}
                                <Box>
                                    <Flex mb={2}>
                                        <InputGroup width={{ base: "215px", lg: "400px", md: "300px" }} size={{ base: "xs", md: "md", lg: "lg" }}>
                                            <InputLeftAddon children='+91' />
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
                                                <i style={{ fontSize: '20px', textAlign: 'center' }} onClick={onCopyNumber} className={hasCopiedNumber ? 'fa-solid fa-copy' : 'fa-regular fa-copy'}></i>
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
                                                <i style={{ fontSize: '20px', textAlign: 'center' }} onClick={onCopyEmail} className={hasCopiedEmail ? 'fa-solid fa-copy' : 'fa-regular fa-copy'}></i>
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
                                                <i style={{ fontSize: '20px', textAlign: 'center' }} onClick={onCopyLocation} className={hasCopiedLocation ? 'fa-solid fa-copy' : 'fa-regular fa-copy'}></i>
                                            </Box>
                                        </InputGroup>
                                    </Flex>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default About