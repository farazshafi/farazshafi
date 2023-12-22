import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import SectionHead from './SectionHead'
import lapImg from "../images/laptop.png"
import whiteImg from "../images/white.png"


const Education = () => {
    return (
        <Box
            bgColor={"#164863"}
            pt={{ lg: "25px", base: "4px", md: "5px" }}
            pb={{ lg: "50px", base: "15px", md: "20px" }}

        >
            <SectionHead i={"education"} color={"white"} text={"EDUCATION"} />
            <Box
                pl={{ lg: "120px", base: "5%" }}
                pr={{ lg: "120px", base: "5%" }}
            >
                <Box
                    display={{ lg: "flex", base: "inline", md: "flex" }}
                    gap={{ lg: "35px", base: "30px" }}
                >
                    {/* higher secondary */}
                    <Box
                        mt={{ base: "30px", lg: "0px", md: "0px" }}
                        bgImg={whiteImg}
                        bgSize={"contain"}
                        width={"100%"}
                    >
                        <Box
                            pt={{ lg: "30px", base: "30px" }}
                            pl={{ lg: "50px", base: "30px" }}
                        >
                            <Text
                                fontFamily={"Poppins"}
                                fontSize={{ lg: "35px", base: "18px", md: "20px" }}
                                fontWeight={700}
                            >
                                Higher secondary
                            </Text>
                            <Text
                                fontFamily={"Poppins"}
                                fontSize={{ lg: "20px", base: "10px", md: "14px" }}
                                mt={{ lg: "20px", base: "5px" }}
                            >
                                Govt. H S S Patla
                            </Text>
                            <Text
                                fontFamily={"Poppins"}
                                fontSize={{ lg: "20px", base: "10px", md: "14px" }}
                                mt={{ lg: "15px", base: "3px" }}
                            >
                                Kasaragod, Kerala, India
                            </Text>
                        </Box>
                        <Box
                            bgColor={"#9BBEC8"}
                            p={{ lg: "15px", base: "8px" }}
                            width={"fit-content"}
                            mt={{ lg: "50px", base: "15px" }}
                        >
                            <Text
                                fontFamily={"Sniglet"}
                                fontSize={{ lg: "20px", base: "12px" }}
                                textAlign={"center"}
                                color={"black"}
                            >
                                2021 - 2023
                            </Text>
                        </Box>
                    </Box>
                    {/* high school */}
                    <Box
                        mt={{ base: "30px", lg: "0px", md: "0px" }}
                        bgImg={lapImg}
                        bgSize={"contain"}
                        // bgRepeat={'no-repeat'}
                        width={"100%"}
                    >
                        <Box
                            pt={{ lg: "30px", base: "30px" }}
                            pl={{ lg: "50px", base: "30px" }}
                        >
                            <Text
                                fontFamily={"Poppins"}
                                fontSize={{ lg: "35px", base: "18px", md: "20px" }}
                                fontWeight={700}
                            >
                                High School
                            </Text>
                            <Text
                                fontFamily={"Poppins"}
                                fontSize={{ lg: "20px", base: "10px", md: "14px" }}
                                mt={{ lg: "20px", base: "5px" }}
                            >
                                Govt. H S S Patla
                            </Text>
                            <Text
                                fontFamily={"Poppins"}
                                fontSize={{ lg: "20px", base: "10px", md: "14px" }}
                                mt={{ lg: "15px", base: "3px" }}
                            >
                                Kasaragod, Kerala, India
                            </Text>
                        </Box>
                        <Box
                            bgColor={"#9BBEC8"}
                            p={{ lg: "15px", base: "8px" }}
                            width={"fit-content"}
                            mt={{ lg: "50px", base: "15px" }}
                        >
                            <Text
                                fontFamily={"Sniglet"}
                                fontSize={{ lg: "20px", base: "12px" }}
                                textAlign={"center"}
                                color={"black"}
                            >
                                2015 - 2020
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Education