import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import SectionHead from './SectionHead'
import lapImg from "../images/laptop.png"
import whiteImg from "../images/white.png"


const Education = () => {
    return (
        <section style={{ backgroundColor: "#164863", paddingTop: "50px", paddingBottom: "50px" }}>
            <SectionHead color={"white"} text={"EDUCATION"} />
            <Box
                pl={{ lg: "120px", base: "5%" }}
                pr={{ lg: "120px", base: "5%" }}
            >
                <HStack spacing={{ lg: "35px" }}>
                    {/* higher secondary */}
                    <Box
                        bgImg={whiteImg}
                        width={"100%"}
                    >
                        <Box
                            pt={{ lg: "30px" }}
                            pl={{ lg: "50px" }}
                        >
                            <Text
                                fontFamily={"Poppins"}
                                fontSize={{ lg: "35px" }}
                                fontWeight={700}
                            >
                                Higher secondary
                            </Text>
                            <Text
                                fontFamily={"Poppins"}
                                fontSize={{ lg: "20px" }}
                                mt={{ lg: "20px" }}
                            >
                                Govt. H S S Patla
                            </Text>
                            <Text
                                fontFamily={"Poppins"}
                                fontSize={{ lg: "20px" }}
                                mt={{ lg: "15px" }}
                            >
                                Kasaragod, Kerala, India
                            </Text>
                        </Box>
                        <Box
                            bgColor={"#9BBEC8"}
                            p={{ lg: "15px" }}
                            width={"fit-content"}
                            mt={{ lg: "50px" }}
                        >
                            <Text
                                fontFamily={"Sniglet"}
                                fontSize={{ lg: "20px" }}
                                textAlign={"center"}
                                color={"black"}
                            >
                                2021 - 2023
                            </Text>
                        </Box>
                    </Box>
                    {/* high school */}
                    <Box
                        bgImg={lapImg}
                        width={"100%"}
                    >
                        <Box
                            pt={{ lg: "30px" }}
                            pl={{ lg: "50px" }}
                        >
                            <Text
                                fontFamily={"Poppins"}
                                fontSize={{ lg: "35px" }}
                                fontWeight={700}
                            >
                                High School
                            </Text>
                            <Text
                                fontFamily={"Poppins"}
                                fontSize={{ lg: "20px" }}
                                mt={{ lg: "20px" }}
                            >
                                Govt. H S S Patla
                            </Text>
                            <Text
                                fontFamily={"Poppins"}
                                fontSize={{ lg: "20px" }}
                                mt={{ lg: "15px" }}
                            >
                                Kasaragod, Kerala, India
                            </Text>
                        </Box>
                        <Box
                            bgColor={"#9BBEC8"}
                            p={{ lg: "15px" }}
                            width={"fit-content"}
                            mt={{ lg: "50px" }}
                        >
                            <Text
                                fontFamily={"Sniglet"}
                                fontSize={{ lg: "20px" }}
                                textAlign={"center"}
                                color={"black"}
                            >
                                2015 - 2020
                            </Text>
                        </Box>
                    </Box>
                </HStack>
            </Box>
        </section>
    )
}

export default Education