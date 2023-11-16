import React from 'react'
import SectionHead from './SectionHead'
import { Box, Button, HStack, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import GedgeppingImg from "../images/gedgepping.png"
import GedgeppingImgMob from "../images/gedgepping-mobile.png"
import { Row, Col } from "react-bootstrap"

const Projects = () => {

    const navigateToGit = (project) => {
        // navigate to git 
    }
    const navigateToLive = (project) => {
        // navigate to live
    }

    return (
        <>
            <SectionHead center={true} text={"PROJECTS"} />
            <Box
                pl={{ lg: "100px" }}
                pr={{ lg: "100px" }}
            >
                <Box
                    bgColor={"white"}
                    display={"flex"}
                    mb={{ lg: "50px" }}
                >
                    <Row>
                        {/* image div */}
                        <Col md={12} lg={12} sm={12}>
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                                justifyContent={"center"}
                            >
                                <Image mt={"2px"} name="Gedgepping" src={GedgeppingImg} />
                            </Box>
                        </Col>
                        {/* details div */}
                        <Col md={12} lg={12} sm={12}>
                            <Box
                                pl={{ lg: "5%", base: "5%" }}
                                pr={{ lg: "5%", base: "5%" }}
                            >
                                <Box
                                    bgColor={"#164863"}
                                    mt="10px"
                                    borderRadius={{ lg: "60px", base: "20px" }}
                                    pl={{ lg: "5%", base: "5%" }}
                                    pt={{ lg: "15px", base: "10px" }}
                                    pr={{ lg: "5%", base: "5%" }}
                                    pb={{ lg: "32px", base: "10px" }}
                                >
                                    <Box>
                                        <Text
                                            fontFamily={"Poppins"}
                                            fontSize={{ lg: '30px', base: "11px" }}
                                            fontWeight={700}
                                            // pt="15px"
                                            color={"white"}
                                        >
                                            GEDGEPPING (E-commerce)
                                        </Text>
                                        <Text
                                            fontFamily={"Sniglet"}
                                            fontSize={{ lg: '22px', base: "9px" }}
                                            mt={{ lg: "8px" }}
                                            color={"white"}

                                        >
                                            Gadgets E-Commerce with Admin Control
                                        </Text>
                                        <Text
                                            fontFamily={"Sniglet"}
                                            fontSize={{ lg: '20px', base: "8px" }}
                                            mt={{ lg: "22px", base: "5px" }}
                                            color={"white"}

                                        >
                                            In my Gedgepping project, I developed a user-friendly MERN ecommerce platform for gadgets. I incorporated RESTful APIs, admin control, search, and secure payment processing etc.
                                        </Text>
                                        <Text
                                            fontFamily={"Poppins"}
                                            fontSize={{ lg: '30px', base: "9px" }}
                                            fontWeight={700}
                                            mb={{ lg: "22px", base: "2px" }}
                                            mt={{ lg: "22px", base: "5px" }}
                                            color={"white"}

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
                                                    fontSize={{ lg: '22px', base: "9px" }}
                                                    color={"white"}

                                                >
                                                    Font-end
                                                </Text>
                                                <UnorderedList fontSize={{ base: "9px", lg: "20px" }} color={"white"}>
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
                                                    fontSize={{ lg: '22px', base: "9px" }}
                                                    color={"white"}

                                                >
                                                    Back-end
                                                </Text>
                                                <UnorderedList fontSize={{ base: "9px", lg: "20px" }} color={"white"}>
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
                                <Box>
                                    <Box
                                        pl={{ lg: "25px", base:"10px" }}
                                        pr={{ lg: "25px", base:"10px" }}
                                        pt={{ lg: "40px", base: "15px" }}
                                        pb={{ lg: "40px", base: "15px" }}
                                    >
                                        <Button onClick={navigateToGit("gedgepping")} size={{ base: "xs", lg: "lg", md: "md" }} width={"100%"}>
                                            GITHUB
                                        </Button>
                                        <Button onClick={navigateToLive("gedgepping")} size={{ base: "xs", lg: "lg", md: "md" }} bgColor={"#9BBEC8"} mt={"5px"} width={"100%"}>
                                            LIVE
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>

                        </Col>
                        <Box
                            bgColor={"black"}
                            width={"100%"}
                            height={{ lg: "5px", base: "3px" }}
                        >

                        </Box>
                    </Row>
                </Box>
            </Box>
        </>
    )
}

export default Projects