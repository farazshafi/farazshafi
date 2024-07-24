import React from 'react'
import bgImage from "../images/background image.png"
import profile from "../images/introImage.webp"
import { Box, Image, Text } from '@chakra-ui/react';

const Intro = () => {
    return (
        <>
            <Box
                bgImg={bgImage}
                // backgroundRepeat={"no-repeat"}
                backgroundPosition={"center"}
                objectFit={"cover"}
                bgSize={'cover'}
                display={"flex"}
                pl={{ base: "20px", lg: "120px", md: "70px" }}
                pr={{ base: "20px", lg: "120px", md: "70px" }}
            >
                <Box>
                    <Box
                        // bgColor={"yellow"}
                        pt={{ lg: "100px", md: "85px", base: "45px" }}
                        width={{ base: "152px", lg: "474px", md: "202px" }}
                    >
                        <Text
                            color={"#9BBEC8"}
                            fontFamily={"Sniglet"}
                            fontSize={{ lg: "50px", base: "20px", md: "30px" }}
                        >
                            I'm
                        </Text>
                        <Text
                            color={"white"}
                            fontFamily={"Timmana"}
                            fontSize={{ base: "30px", lg: "90px", md: "40px" }}
                            height={{ lg: "95px", base: "35px", md: "45px" }}
                        >
                            FARAZ SHAFI
                        </Text>
                        <Text
                            color={"#9BBEC8"}
                            fontFamily={"Sniglet"}
                            fontSize={{ lg: "30px", base: "12px" }}
                            textAlign={"right"}
                        >
                            fullstack developer
                        </Text>
                    </Box>
                </Box>
                <Box
                    // bgColor={"red"}
                    width={"100%"}
                >
                    <Image
                        src={profile}
                        alt='profile'
                    
                        width={{ lg: "301px", base: "137px", md: "210px" }}
                        mt={{ lg: "82px", md: "20px", base: "35px" }}
                        // height={"353px"} 
                        ml={"auto"}
                    />
                </Box>
            </Box>
        </>
    )
}

export default Intro
