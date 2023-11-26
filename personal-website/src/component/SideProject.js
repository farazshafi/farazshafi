import React from 'react'
import SectionHead from './SectionHead'
import { Box, Button, HStack, Text, Link, VStack } from '@chakra-ui/react'
import { Col, Row } from 'react-bootstrap'

const SideProject = () => {
    return (
        <>
            <SectionHead text={"SIDE PROJECT"} />
            <Box
                pl={{ lg: "120px" }}
                pr={{ lg: "120px" }}
            >
                <Box>
                    <VStack>
                        <HStack spacing={"70px"}>
                            {/* Netflix Clone */}
                            <Box
                                width={{ lg: "612px" }}
                                bgColor={"#DDF2FD"}
                                pb={{ lg: "20px" }}
                                pl={{ lg: "10px" }}
                                pr={{ lg: "10px" }}
                            >
                                <Box
                                >
                                    <HStack>
                                        <Text
                                            fontFamily={"Poppins"}
                                            fontSize={{ lg: "28px", }}
                                            fontWeight={700}
                                            color={"black"}
                                            mt={{ lg: "20px" }}
                                        >
                                            Netflix Clone
                                        </Text>
                                        <HStack spacing={"15px"} ml="auto">
                                            <Link href='https://github.com/farazshafi/netflix-clone'>
                                                <Button
                                                    borderRadius={0}
                                                    color={"white"}
                                                    _hover={{ color: "black", background: "#9BBEC8" }}
                                                    bgColor={"#164863"}>
                                                    GITHUB
                                                </Button>
                                            </Link>
                                            <Link href='https://farazshafi.github.io/netflix-clone/'>
                                                <Button
                                                    borderRadius={0}
                                                    color={"white"}
                                                    _hover={{ color: "black", background: "#9BBEC8" }}
                                                    bgColor={"#164863"}>
                                                    LIVE
                                                </Button>
                                            </Link>

                                        </HStack>
                                    </HStack>
                                </Box>
                                <Text
                                    fontFamily={"Sniglet"}
                                    fontSize={{ lg: "20px" }}
                                >
                                    I designed and developed a Netflix clone, a web application that replicates the user experience of the popular streaming platform, Netflix. This project showcases my skills in web development and user interface design while highlighting my ability to create a functional and user-friendly application.
                                </Text>
                            </Box>
                            {/* Keeper app */}
                            <Box
                                // width={{ lg: "612px" }}
                                bgColor={"#DDF2FD"}
                                pb={{ lg: "20px" }}
                                pl={{ lg: "10px" }}
                                pr={{ lg: "10px" }}
                            >
                                <HStack>
                                    <Text
                                        fontFamily={"Poppins"}
                                        fontSize={{ lg: "28px", }}
                                        fontWeight={700}
                                        color={"black"}
                                        mt={{ lg: "20px" }}
                                    >
                                        Keeper app
                                    </Text>
                                    <HStack spacing={"15px"} ml="auto">
                                        <Link href='https://github.com/farazshafi/keeper-app'>
                                            <Button
                                                borderRadius={0}
                                                color={"white"}
                                                _hover={{ color: "black", background: "#9BBEC8" }}
                                                bgColor={"#164863"}>
                                                GITHUB
                                            </Button>
                                        </Link>
                                        <Link href='https://farazshafi.github.io/keeper-app/'>
                                            <Button
                                                borderRadius={0}
                                                color={"white"}
                                                _hover={{ color: "black", background: "#9BBEC8" }}
                                                bgColor={"#164863"}>
                                                LIVE
                                            </Button>
                                        </Link>

                                    </HStack>
                                </HStack>
                                <Text
                                    fontFamily={"Sniglet"}
                                    fontSize={{ lg: "20px" }}
                                >
                                    Built with React and featuring a responsive design, the Keeper App is a user-friendly note-taking application that allows users to create, save, and manage their notes with the convenience of local storage
                                </Text>
                            </Box>
                        </HStack>
                        <HStack spacing={"70px"}>
                            {/*  Driving school */}
                            <Box
                                // width={{ lg: "612px" }}
                                bgColor={"#DDF2FD"}
                                pb={{ lg: "20px" }}
                                pl={{ lg: "10px" }}
                                pr={{ lg: "10px" }}

                            >
                                <Box
                                >
                                    <HStack>
                                        <Text
                                            fontFamily={"Poppins"}
                                            fontSize={{ lg: "28px", }}
                                            fontWeight={700}
                                            color={"black"}
                                            mt={{ lg: "20px" }}
                                        >
                                            Driving school
                                        </Text>
                                        <HStack spacing={"15px"} ml="auto">
                                            <Link href='https://github.com/farazshafi/Driving_School_Demo'>
                                                <Button
                                                    borderRadius={0}
                                                    color={"white"}
                                                    _hover={{ color: "black", background: "#9BBEC8" }}
                                                    bgColor={"#164863"}>
                                                    GITHUB
                                                </Button>
                                            </Link>
                                            <Link href='https://farazshafi.github.io/Driving_School_Demo/'>
                                                <Button
                                                    borderRadius={0}
                                                    color={"white"}
                                                    _hover={{ color: "black", background: "#9BBEC8" }}
                                                    bgColor={"#164863"}>
                                                    LIVE
                                                </Button>
                                            </Link>

                                        </HStack>
                                    </HStack>
                                </Box>
                                <Text
                                    fontFamily={"Sniglet"}
                                    fontSize={{ lg: "20px" }}
                                >
                                    Designed and developed a captivating driving school website, enriched with seamless animations, delivering an immersive user experience while providing comprehensive course details, interactive maps, and easy contact options.
                                </Text>
                            </Box>
                            {/* Memory Game*/}
                            <Box
                                // width={{ lg: "612px" }}
                                bgColor={"#DDF2FD"}
                                pb={{ lg: "20px" }}
                                pl={{ lg: "10px" }}
                                pr={{ lg: "10px" }}
                            >
                                <HStack>
                                    <Text
                                        fontFamily={"Poppins"}
                                        fontSize={{ lg: "28px", }}
                                        fontWeight={700}
                                        color={"black"}
                                        mt={{ lg: "20px" }}
                                    >
                                        Memory Game
                                    </Text>
                                    <HStack spacing={"15px"} ml="auto">
                                        <Link href='https://github.com/farazshafi/memory-game'>
                                            <Button
                                                borderRadius={0}
                                                color={"white"}
                                                _hover={{ color: "black", background: "#9BBEC8" }}
                                                bgColor={"#164863"}>
                                                GITHUB
                                            </Button>
                                        </Link>
                                        <Link href='https://farazshafi.github.io/memory-game/'>
                                            <Button
                                                borderRadius={0}
                                                color={"white"}
                                                _hover={{ color: "black", background: "#9BBEC8" }}
                                                bgColor={"#164863"}>
                                                LIVE
                                            </Button>
                                        </Link>

                                    </HStack>
                                </HStack>
                                <Text
                                    fontFamily={"Sniglet"}
                                    fontSize={{ lg: "20px" }}
                                >
                                    Developed an interactive Memory game with HTML, CSS, and JavaScript, featuring levels, sound effects, and a memory level tracker, showcasing proficiency in web development and user interface design
                                </Text>
                            </Box>
                        </HStack>

                    </VStack>

                </Box>
            </Box >

        </>
    )
}

export default SideProject