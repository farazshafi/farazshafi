import React from 'react'
import SectionHead from './SectionHead'
import { Box, Button, HStack, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import GedgeppingImg from "../images/gedgepping.png"

const Projects = () => {
    return (
        <>
            <SectionHead center={true} text={"PROJECTS"} />
            <Box
                pl={{ lg: "120px" }}
                pr={{ lg: "120px" }}
            >
                <Box
                    bgColor={"#164863"}
                    display={"flex"}
                    mb={{ lg: "50px" }}
                >
                    {/* image div */}
                    <Box
                        width={"50%"}
                        height={"457px"}
                    >
                        <Image mt={"2px"} name="Gedgepping" src={GedgeppingImg} />
                        <Box
                            pl={{ lg: "25px" }}
                            pr={{ lg: "25px" }}
                            pt={{ lg: "40px" }}
                            pb={{ lg: "40px" }}
                        >
                            <Button width={"100%"}>
                                GITHUB
                            </Button>
                            <Button bgColor={"#9BBEC8"} mt={"5px"} width={"100%"}>
                                LIVE
                            </Button>
                        </Box>

                    </Box>

                    {/* details div */}
                    <Box
                        width={"50%"}
                        bgColor={"white"}
                        mt="2px"
                        borderRadius={{ lg: "0px 0px 60px 60px" }}
                        pl={{ lg: "30px" }}
                        pb={{ lg: "32px" }}
                        mb={{ lg: "35px" }}
                    >
                        <Box>
                            <Text
                                fontFamily={"Poppins"}
                                fontSize={{ lg: '30px' }}
                                fontWeight={700}
                                mt="5px"
                            >
                                GEDGEPPING (E-commerce)
                            </Text>
                            <Text
                                fontFamily={"Sniglet"}
                                fontSize={{ lg: '22px' }}
                                mt={{ lg: "8px" }}
                            >
                                Gadgets E-Commerce with Admin Control
                            </Text>
                            <Text
                                fontFamily={"Sniglet"}
                                fontSize={{ lg: '20px' }}
                                mt={{ lg: "22px" }}
                            >
                                In my Gedgepping project, I developed a user-friendly MERN ecommerce platform for gadgets. I incorporated RESTful APIs, admin control, search, and secure payment processing etc.
                            </Text>
                            <Text
                                fontFamily={"Poppins"}
                                fontSize={{ lg: '30px' }}
                                fontWeight={700}
                                mt={{ lg: "22px" }}
                            >
                                Used Technology
                            </Text>
                            <HStack
                                display={"flex"}
                            >
                                {/* Front-end */}
                                <Box>
                                    <Text
                                        fontFamily={"Poppins"}
                                        fontWeight={600}
                                        fontSize={{ lg: '22px' }}
                                    >
                                        Font-end
                                    </Text>
                                    <UnorderedList>
                                        <ListItem>React.js</ListItem>
                                        <ListItem>HTML/CSS/JavaScript</ListItem>
                                        <ListItem>Redux</ListItem>
                                        <ListItem>Payment Processing: <b>Paypal</b></ListItem>
                                        <ListItem>Bootswatch and Bootstrap</ListItem>
                                        <ListItem>Axios/Fetch</ListItem>
                                        <ListItem>Helmet</ListItem>
                                    </UnorderedList>
                                </Box>
                                {/* Back-end */}
                                <Box
                                    ml="auto"
                                >
                                    <Text
                                        fontFamily={"Poppins"}
                                        fontWeight={600}
                                        fontSize={{ lg: '22px' }}
                                    >
                                        Back-end
                                    </Text>
                                    <UnorderedList>
                                        <ListItem>Node.js</ListItem>
                                        <ListItem>Express.js </ListItem>
                                        <ListItem>MongoDB, Mongoose</ListItem>
                                        <ListItem>Bcrypt, Dotenv, JSON Web Token </ListItem>
                                        <ListItem>Multer</ListItem>
                                        <ListItem>Middleware</ListItem>
                                        <ListItem>Morgan</ListItem>
                                    </UnorderedList>
                                </Box>

                            </HStack>

                        </Box>
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default Projects