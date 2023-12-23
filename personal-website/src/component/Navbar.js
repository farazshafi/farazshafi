import React from 'react'
import { Text, Box, Link, Select, Menu, MenuButton, MenuList, MenuItem, Button, HStack } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'

const Navbar = () => {
    return (
        <>
            <Box bgColor={"#164863"}
                pl={{ base: "10px", lg: "25px", md: "13px" }}
                pr={{ base: "10px", lg: "25px", md: "13px" }}
                pt={{ base: "10px", lg: "23px", md: "13px" }}
                pb={{ base: "10px", lg: "23px", md: "13px" }}
                display={"flex"}
            >
                <Text
                    fontFamily={"Poppins"}
                    color={"white"}
                    fontSize={{ base: "15px", lg: "36px", md: "31px" }}
                >
                    Faraz shafi
                </Text>


                <Box
                    display={"flex"}
                    ml={"auto"}
                >
                    <HStack spacing={{ base: "10px", lg: "40px" }}>
                        <Link href={"#about"}>
                            <Text
                                fontFamily={"Poppins"}
                                color={"white"}
                                mt={{ base: "4px", lg: "8px", md: "7px" }}
                                fontSize={{ base: "10px", lg: "25px", md: "20px" }}
                            >
                                about
                            </Text>
                        </Link>
                        <Menu>
                            <Box>
                                <Text
                                    fontFamily={"Poppins"}
                                    color={"white"}
                                    mt={{ base: "4px", lg: "8px", md: "7px" }}
                                    fontSize={{ base: "10px", lg: "25px", md: "20px" }}
                                >
                                    <MenuButton>Projects</MenuButton>
                                </Text>
                            </Box>
                            <MenuList minWidth={'auto'}>
                                <MenuItem width={"fit-content"}>
                                    <Link href={"#projects"}>
                                        <Text
                                            fontFamily={"Poppins"}
                                            color={"black"}
                                            mt={{ base: "4px", lg: "8px", md: "7px" }}
                                            fontSize={{ base: "10px", lg: "20px", md: "20px" }}
                                        >
                                            Main Projects
                                        </Text>
                                    </Link>
                                </MenuItem>
                                <MenuItem width={"fit-content"}>
                                    <Link href={"#side-projects"}>
                                        <Text
                                            fontFamily={"Poppins"}
                                            color={"black"}
                                            mt={{ base: "4px", lg: "8px", md: "7px" }}
                                            fontSize={{ base: "10px", lg: "20px", md: "20px" }}
                                        >
                                            Side Projects
                                        </Text>
                                    </Link>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                        <Link href={"#skills"}>
                            <Text
                                fontFamily={"Poppins"}
                                color={"white"}
                                mt={{ base: "4px", lg: "8px", md: "7px" }}
                                fontSize={{ base: "10px", lg: "25px", md: "20px" }}
                            >
                                skills
                            </Text>
                        </Link>
                        <Link href={"#education"}>
                            <Text
                                fontFamily={"Poppins"}
                                color={"white"}
                                mt={{ base: "4px", lg: "8px", md: "7px" }}
                                fontSize={{ base: "10px", lg: "25px", md: "20px" }}
                            >
                                education
                            </Text>
                        </Link>
                        <Link href='#contact'>
                            <Box
                                mt={{ base: "4px", lg: "4px", md: "7px" }}
                                pl={{ base: "5px", lg: "27px" }}
                                pr={{ base: "5px", lg: "27px" }}
                                pt={{ base: "2px", lg: "8px" }}
                                pb={{ base: "2px", lg: "8px" }}
                                height={{ base: "15px", lg: "46px", md: "28px" }}
                                fontFamily={"Poppins"}
                                bg={"white"}
                                alignItems={"center"}
                                textAlign={"center"}
                                fontSize={{ base: "7px", lg: "20px", md: "15px" }}
                            >
                                Contact me
                            </Box>
                        </Link>

                    </HStack>

                </Box>
            </Box >
        </>
    )
}

export default Navbar
