import React from 'react'
import SectionHead from './SectionHead'
import { Box, Button,Text, Link} from '@chakra-ui/react'
const SideProject = () => {
    return (
        <>
            <SectionHead i={"side-projects"} text={"SIDE PROJECT"} />
            <Box
                pl={{ lg: "120px", base: "5%" }}
                pr={{ lg: "120px", base: "5%" }}
                display={{ lg: "flex", md: "" }}
                gap={{ lg: "30px" }}
            >
                {/* keeper app */}
                <Box
                    width={{ lg: "100%", base: "100%" }}
                    bgColor={"#DDF2FD"}
                    pb={{ lg: "30px", base: "15px" }}
                    mb={{ base: "15px" }}

                >
                    <Box display={"flex"}>
                        <Text
                            fontFamily={"Poppins"}
                            fontSize={{ lg: "28px", base: "13px", md: "15px" }}
                            fontWeight={700}
                            color={"black"}
                            pl={{ lg: "10px", base: "5px" }}
                            mt={{ lg: "20px", base: "5px" }}
                        >
                            Keeper app
                        </Text>
                        <Box ml={"auto"} gap={{ lg: "20px", base: "5px", md: "13px" }} display={"flex"}>
                            <Link href='https://github.com/farazshafi/keeper-app'>
                                <Button
                                    borderRadius={0}
                                    color={"white"}
                                    size={{ lg: "lg", base: "xs", md: "sm" }}
                                    _hover={{ color: "black", background: "#9BBEC8" }}
                                    bgColor={"#164863"}>
                                    <Text fontSize={{ base: "7px", lg: "20px", md: "13px" }}>GITHUB</Text>
                                </Button>
                            </Link>
                            <Link href='https://farazshafi.github.io/keeper-app/'>
                                <Button
                                    borderRadius={0}
                                    color={"white"}
                                    size={{ lg: "lg", base: "xs", md: "sm" }}
                                    _hover={{ color: "black", background: "#9BBEC8" }}
                                    bgColor={"#164863"}>
                                    <Text fontSize={{ base: "7px", lg: "20px", md: "13px" }}>LIVE</Text>
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                    <Box
                        pl={{ lg: "10px", base: "5px" }}
                        pr={{ lg: "10px", base: "5px" }}
                    >
                        <Text
                            fontFamily={"Sniglet"}
                            fontSize={{ lg: "20px", base: "12px", md: "13px" }}
                            mt={"5px"}
                        >
                            Built with React and featuring a responsive design, the Keeper App is a user-friendly note-taking application that allows users to create, save, and manage their notes with the convenience of local storage
                        </Text>
                    </Box>
                </Box>

                {/* NETFLIX CLONE */}
                <Box
                    width={{ lg: "100%", base: "100%" }}
                    bgColor={"#DDF2FD"}
                    pb={{ lg: "30px", base: "15px" }}
                    mb={{ base: "15px" }}
                >
                    <Box display={"flex"}>
                        <Text
                            fontFamily={"Poppins"}
                            fontSize={{ lg: "28px", base: "13px", md: "15px" }}
                            fontWeight={700}
                            color={"black"}
                            pl={{ lg: "10px", base: "5px" }}
                            mt={{ lg: "20px", base: "5px" }}
                        >
                            Netflix Clone
                        </Text>
                        <Box ml={"auto"} gap={{ lg: "20px", base: "5px", md: "13px" }} display={"flex"}>
                            <Link href='https://github.com/farazshafi/netflix-clone'>
                                <Button
                                    borderRadius={0}
                                    color={"white"}
                                    size={{ lg: "lg", base: "xs", md: "sm" }}
                                    _hover={{ color: "black", background: "#9BBEC8" }}
                                    bgColor={"#164863"}>
                                    <Text fontSize={{ base: "7px", lg: "20px", md: "13px" }}>GITHUB</Text>
                                </Button>
                            </Link>
                            <Link href='https://farazshafi.github.io/netflix-clone/'>
                                <Button
                                    borderRadius={0}
                                    color={"white"}
                                    size={{ lg: "lg", base: "xs", md: "sm" }}
                                    _hover={{ color: "black", background: "#9BBEC8" }}
                                    bgColor={"#164863"}>
                                    <Text fontSize={{ base: "7px", lg: "20px", md: "13px" }}>LIVE</Text>
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                    <Box
                        pl={{ lg: "10px", base: "5px" }}
                        pr={{ lg: "10px", base: "5px" }}
                    >
                        <Text
                            fontFamily={"Sniglet"}
                            fontSize={{ lg: "20px", base: "12px", md: "13px" }}
                            mt={"5px"}
                        >
                            I designed and developed a Netflix clone, a web application that replicates the user experience of the popular streaming platform, Netflix. This project showcases my skills in web development and user interface design while highlighting my ability to create a functional and user-friendly application.
                        </Text>
                    </Box>
                </Box>

                {/* Driving school */}
                <Box
                    width={{ lg: "100%", base: "100%" }}
                    bgColor={"#DDF2FD"}
                    pb={{ lg: "30px", base: "15px" }}
                    mb={{ base: "15px" }}

                >
                    <Box display={"flex"}>
                        <Text
                            fontFamily={"Poppins"}
                            fontSize={{ lg: "28px", base: "13px", md: "15px" }}
                            fontWeight={700}
                            color={"black"}
                            pl={{ lg: "10px", base: "5px" }}
                            mt={{ lg: "20px", base: "5px" }}
                        >
                            Driving school
                        </Text>
                        <Box ml={"auto"} gap={{ lg: "20px", base: "5px", md: "13px" }} display={"flex"}>
                            <Link href='https://github.com/farazshafi/Driving_School_Demo'>                                    <Button
                                borderRadius={0}
                                color={"white"}
                                size={{ lg: "lg", base: "xs", md: "sm" }}
                                _hover={{ color: "black", background: "#9BBEC8" }}
                                bgColor={"#164863"}>
                                <Text fontSize={{ base: "7px", lg: "20px", md: "13px" }}>GITHUB</Text>
                            </Button>
                            </Link>
                            <Link href='https://farazshafi.github.io/Driving_School_Demo/'>                                    <Button
                                borderRadius={0}
                                color={"white"}
                                size={{ lg: "lg", base: "xs", md: "sm" }}
                                _hover={{ color: "black", background: "#9BBEC8" }}
                                bgColor={"#164863"}>
                                <Text fontSize={{ base: "7px", lg: "20px", md: "13px" }}>LIVE</Text>
                            </Button>
                            </Link>
                        </Box>
                    </Box>
                    <Box
                        pl={{ lg: "10px", base: "5px" }}
                        pr={{ lg: "10px", base: "5px" }}
                    >
                        <Text
                            fontFamily={"Sniglet"}
                            fontSize={{ lg: "20px", base: "12px", md: "13px" }}
                            mt={"5px"}
                        >
                            Designed and developed a captivating driving school website, enriched with seamless animations, delivering an immersive user experience while providing comprehensive course details, interactive maps, and easy contact options.
                        </Text>
                    </Box>
                </Box>

                {/* Memory Game */}
                <Box
                    width={{ lg: "100%", base: "100%" }}
                    bgColor={"#DDF2FD"}
                    pb={{ lg: "30px", base: "15px" }}
                    mb={{ base: "15px" }}
                >
                    <Box display={"flex"}>
                        <Text
                            fontFamily={"Poppins"}
                            fontSize={{ lg: "28px", base: "13px", md: "15px" }}
                            fontWeight={700}
                            color={"black"}
                            pl={{ lg: "10px", base: "5px" }}
                            mt={{ lg: "20px", base: "5px" }}
                        >
                            Memory Game
                        </Text>
                        <Box ml={"auto"} gap={{ lg: "20px", base: "5px", md: "13px" }} display={"flex"}>
                            <Link href='https://github.com/farazshafi/memory-game'>
                                <Button
                                    borderRadius={0}
                                    color={"white"}
                                    size={{ lg: "lg", base: "xs", md: "sm" }}
                                    _hover={{ color: "black", background: "#9BBEC8" }}
                                    bgColor={"#164863"}>
                                    <Text fontSize={{ base: "7px", lg: "20px", md: "13px" }}>GITHUB</Text>
                                </Button>
                            </Link>
                            <Link href='https://farazshafi.github.io/memory-game/'>
                                <Button
                                    borderRadius={0}
                                    color={"white"}
                                    size={{ lg: "lg", base: "xs", md: "sm" }}
                                    _hover={{ color: "black", background: "#9BBEC8" }}
                                    bgColor={"#164863"}>
                                    <Text fontSize={{ base: "7px", lg: "20px", md: "13px" }}>LIVE</Text>
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                    <Box
                        pl={{ lg: "10px", base: "5px" }}
                        pr={{ lg: "10px", base: "5px" }}
                    >
                        <Text
                            fontFamily={"Sniglet"}
                            fontSize={{ lg: "20px", base: "12px", md: "13px" }}
                            mt={"5px"}
                        >
                            Developed an interactive Memory game with HTML, CSS, and JavaScript, featuring levels, sound effects, and a memory level tracker, showcasing proficiency in web development and user interface design
                        </Text>
                    </Box>
                </Box>

            </Box>
        </>
    )
}

export default SideProject



