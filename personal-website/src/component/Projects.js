import React from 'react'
import SectionHead from './SectionHead'
import { Box, Button, HStack, Image, Link, ListItem, Text, Tooltip, UnorderedList } from '@chakra-ui/react'
import GedgeppingImg from "../images/gedgepping.png"
import ChaatikoImg from "../images/chaatiko.png"
import HadithsoulImg from "../images/hadithsoul.png"
import { Row, Col } from "react-bootstrap"
const Projects = () => {

    return (
        <>
            <SectionHead i={"projects"} center={true} text={"PROJECTS"} />
            {/* Gedgepping project */}
            <Box
                pl={{ lg: "100px" }}
                pr={{ lg: "100px" }}
                display={"flex"}
                justifyContent={"center"}
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
                                <Image mt={"2px"} width={{ base: "300px", lg: "600px", md: "450px" }} name="Gedgepping" src={GedgeppingImg} />
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
                                            fontSize={{ lg: '30px', base: "11px", md: "20px" }}
                                            fontWeight={700}
                                            color={"white"}
                                        >
                                            GEDGEPPING (E-commerce)
                                        </Text>
                                        <Text
                                            fontFamily={"Sniglet"}
                                            fontSize={{ lg: '22px', base: "9px", md: "15px" }}
                                            mt={{ lg: "8px" }}
                                            color={"white"}

                                        >
                                            Gadgets E-Commerce with Admin Control
                                        </Text>
                                        <Text
                                            fontFamily={"Sniglet"}
                                            fontSize={{ lg: '20px', base: "8px", md: "13px" }}
                                            mt={{ lg: "22px", base: "5px" }}
                                            color={"white"}

                                        >
                                            In my Gedgepping project, I developed a user-friendly MERN ecommerce platform for gadgets. I incorporated RESTful APIs, admin control, search, and secure payment processing etc.
                                        </Text>
                                        <Text
                                            fontFamily={"Poppins"}
                                            fontSize={{ lg: '30px', base: "9px", md: "15px" }}
                                            fontWeight={700}
                                            mb={{ lg: "22px", base: "2px" }}
                                            mt={{ lg: "22px", base: "5px" }}
                                            color={"white"}
                                        >
                                            Used Technology
                                        </Text>
                                        <HStack>
                                            {/* Front-end */}
                                            <Box>
                                                <Text
                                                    fontFamily={"Poppins"}
                                                    fontWeight={600}
                                                    fontSize={{ lg: '22px', base: "9px", md: "12px" }}
                                                    color={"white"}

                                                >
                                                    Font-end
                                                </Text>
                                                <UnorderedList fontSize={{ base: "9px", lg: "20px", md: "13px" }} color={"white"}>
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
                                                    fontSize={{ lg: '22px', base: "9px", md: "12px" }}
                                                    color={"white"}

                                                >
                                                    Back-end
                                                </Text>
                                                <UnorderedList fontSize={{ base: "9px", lg: "20px", md: "13px" }} color={"white"}>
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
                                        pl={{ lg: "25px", base: "10px" }}
                                        pr={{ lg: "25px", base: "10px" }}
                                        pt={{ lg: "40px", base: "15px" }}
                                        pb={{ lg: "40px", base: "15px" }}
                                    >
                                        <HStack>
                                            <Box width={"100%"}>
                                                <Link target='_blank' href="https://github.com/farazshafi/Gedgepping">
                                                    <Button
                                                        size={{ base: "xs", lg: "lg", md: "md" }}
                                                        bgColor={"#164863"}
                                                        width={"100%"}
                                                        color={"white"}
                                                        _hover={{ backgroundColor: "#DDF2FD", color: "black" }}
                                                    >
                                                        GITHUB
                                                    </Button>
                                                </Link>
                                            </Box>
                                            <Box width={"100%"}>
                                                <Link target='_blank' href="https://gedgepping.onrender.com/">
                                                <Tooltip
                                                    label="Server needs to start, Please wait 1 minutes"
                                                    placement='bottom-end'
                                                    hasArrow
                                                    bg="#164863"
                                                >
                                                    <Button
                                                        size={{ base: "xs", lg: "lg", md: "md" }}
                                                        bgColor={"#9BBEC8"}
                                                        width={"100%"}
                                                        _hover={{ backgroundColor: "#DDF2FD", color: "black" }}
                                                    >
                                                       LIVE
                                                    </Button>
                                                </Tooltip>
                                                </Link>
                                            </Box>

                                        </HStack>

                                    </Box>
                                </Box>
                            </Box>

                        </Col>
                        <Box
                            bgColor={"black"}
                            width={"100%"}
                            height={{ lg: "5px", base: "3px" }}
                            mb={"10px"}
                        >

                        </Box>
                    </Row>
                </Box>
            </Box>
            {/* Chaatiko project */}
            <Box
                pl={{ lg: "100px" }}
                pr={{ lg: "100px" }}
                display={"flex"}
                justifyContent={"center"}
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
                                <Image mt={"2px"} width={{ base: "300px", lg: "600px", md: "450px" }} name="Gedgepping" src={ChaatikoImg} />
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
                                            fontSize={{ lg: '30px', base: "11px", md: "20px" }}
                                            fontWeight={700}
                                            color={"white"}
                                        >
                                            Chaatiko (ReaTime )
                                        </Text>
                                        <Text
                                            fontFamily={"Sniglet"}
                                            fontSize={{ lg: '22px', base: "9px", md: "15px" }}
                                            mt={{ lg: "8px" }}
                                            color={"white"}

                                        >
                                            Making real-time conversations accessible with 'Chaatiko'
                                        </Text>
                                        <Text
                                            fontFamily={"Sniglet"}
                                            fontSize={{ lg: '20px', base: "8px", md: "13px" }}
                                            mt={{ lg: "22px", base: "5px" }}
                                            color={"white"}
                                        >
                                            I developed a dynamic real-time chat web app with user registration, friend management, user details, group chats, notifications, and search. Includes a dark mode for enhanced user experience
                                        </Text>
                                        <Text
                                            fontFamily={"Poppins"}
                                            fontSize={{ lg: '30px', base: "9px", md: "15px" }}
                                            fontWeight={700}
                                            mb={{ lg: "22px", base: "2px" }}
                                            mt={{ lg: "22px", base: "5px" }}
                                            color={"white"}
                                        >
                                            Used Technology
                                        </Text>
                                        <HStack>
                                            {/* Front-end */}
                                            <Box>
                                                <Text
                                                    fontFamily={"Poppins"}
                                                    fontWeight={600}
                                                    fontSize={{ lg: '22px', base: "9px", md: "12px" }}
                                                    color={"white"}

                                                >
                                                    Font-end
                                                </Text>
                                                <UnorderedList fontSize={{ base: "9px", lg: "20px", md: "13px" }} color={"white"}>
                                                    <ListItem>React.js</ListItem>
                                                    <ListItem>HTML/CSS/JavaScript</ListItem>
                                                    <ListItem>Socket.IO </ListItem>
                                                    <ListItem>Chakra UI and Bootstrap. </ListItem>
                                                    <ListItem>Axios/Fetch</ListItem>
                                                    <ListItem>Lottie</ListItem>
                                                </UnorderedList>
                                            </Box>
                                            {/* Back-end */}
                                            <Box
                                                ml="auto"
                                            >
                                                <Text
                                                    fontFamily={"Poppins"}
                                                    fontWeight={600}
                                                    fontSize={{ lg: '22px', base: "9px", md: "12px" }}
                                                    color={"white"}

                                                >
                                                    Back-end
                                                </Text>
                                                <UnorderedList fontSize={{ base: "9px", lg: "20px", md: "13px" }} color={"white"}>
                                                    <ListItem>Node.js</ListItem>
                                                    <ListItem>Express.js </ListItem>
                                                    <ListItem>MongoDB, Mongoose</ListItem>
                                                    <ListItem>Bcrypt, Dotenv, JSON Web Token </ListItem>
                                                    <ListItem>Socket.IO</ListItem>
                                                    <ListItem>Middleware</ListItem>
                                                    <ListItem>Nodemon</ListItem>
                                                </UnorderedList>
                                            </Box>
                                        </HStack>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box
                                        pl={{ lg: "25px", base: "10px" }}
                                        pr={{ lg: "25px", base: "10px" }}
                                        pt={{ lg: "40px", base: "15px" }}
                                        pb={{ lg: "40px", base: "15px" }}
                                    >
                                        <HStack>
                                            <Box width={"100%"}>
                                                <Link target='_blank' href="https://github.com/farazshafi/Chaatiko">

                                                    <Button
                                                        size={{ base: "xs", lg: "lg", md: "md" }}
                                                        bgColor={"#164863"}
                                                        width={"100%"}
                                                        color={"white"}
                                                        _hover={{ backgroundColor: "#DDF2FD", color: "black" }}
                                                    >
                                                        GITHUB
                                                    </Button>
                                                </Link>
                                            </Box>
                                            <Box width={"100%"}>
                                                <Link target='_blank' href="https://chaatiko.onrender.com/">
                                                <Tooltip
                                                    label="Server needs to start, Please wait 1 minutes"
                                                    placement='bottom-end'
                                                    hasArrow
                                                    bg="#164863"
                                                >
                                                     <Button
                                                        size={{ base: "xs", lg: "lg", md: "md" }}
                                                        bgColor={"#9BBEC8"}
                                                        width={"100%"}
                                                        _hover={{ backgroundColor: "#DDF2FD", color: "black" }}
                                                    >
                                                        LIVE
                                                    </Button>
                                                </Tooltip>
                                                </Link>
                                            </Box>

                                        </HStack>

                                    </Box>
                                </Box>
                            </Box>

                        </Col>
                        <Box
                            bgColor={"black"}
                            width={"100%"}
                            height={{ lg: "5px", base: "3px" }}
                            mb={"10px"}
                        >

                        </Box>
                    </Row>
                </Box>
            </Box>
            {/* Hadithsoul project */}
            <Box
                pl={{ lg: "100px" }}
                pr={{ lg: "100px" }}
                display={"flex"}
                justifyContent={"center"}
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
                                <Image mt={"2px"} width={{ base: "300px", lg: "600px", md: "450px" }} name="Gedgepping" src={HadithsoulImg} />
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
                                            fontSize={{ lg: '30px', base: "11px", md: "20px" }}
                                            fontWeight={700}
                                            color={"white"}
                                        >
                                            Hadithsoul 
                                        </Text>
                                        <Text
                                            fontFamily={"Sniglet"}
                                            fontSize={{ lg: '22px', base: "9px", md: "15px" }}
                                            mt={{ lg: "8px" }}
                                            color={"white"}

                                        >
                                            Guiding you to Jannah through knowledge and inspiration.
                                        </Text>
                                        <Text
                                            fontFamily={"Sniglet"}
                                            fontSize={{ lg: '20px', base: "8px", md: "13px" }}
                                            mt={{ lg: "22px", base: "5px" }}
                                            color={"white"}
                                        >
                                            Your portal to Islamic wisdom and inspiration. Discover authentic hadiths, religious collections, the 99 names of Allah, adhkars, nasheed ringtones, and stay connected with our Instagram posts and videos. Immerse yourself in spirituality effortlessly.
                                        </Text>
                                        <Text
                                            fontFamily={"Poppins"}
                                            fontSize={{ lg: '30px', base: "9px", md: "15px" }}
                                            fontWeight={700}
                                            mb={{ lg: "22px", base: "2px" }}
                                            mt={{ lg: "22px", base: "5px" }}
                                            color={"white"}
                                        >
                                            Used Technology
                                        </Text>
                                        <HStack>
                                            {/* Front-end */}
                                            <Box>
                                                <Text
                                                    fontFamily={"Poppins"}
                                                    fontWeight={600}
                                                    fontSize={{ lg: '22px', base: "9px", md: "12px" }}
                                                    color={"white"}

                                                >
                                                    Font-end
                                                </Text>
                                                <UnorderedList fontSize={{ base: "9px", lg: "20px", md: "13px" }} color={"white"}>
                                                    <ListItem>React.js</ListItem>
                                                    <ListItem>HTML/CSS/JavaScript</ListItem>
                                                    <ListItem>Chakra UI, Bootstrap, and Material-UI </ListItem>
                                                    <ListItem>Axios/Fetch</ListItem>
                                                    <ListItem>Lottie</ListItem>
                                                    <ListItem>AOS animation</ListItem>
                                                </UnorderedList>
                                            </Box>
                                            {/* Back-end */}
                                            <Box
                                                ml="auto"
                                            >
                                                <Text
                                                    fontFamily={"Poppins"}
                                                    fontWeight={600}
                                                    fontSize={{ lg: '22px', base: "9px", md: "12px" }}
                                                    color={"white"}

                                                >
                                                    Back-end
                                                </Text>
                                                <UnorderedList fontSize={{ base: "9px", lg: "20px", md: "13px" }} color={"white"}>
                                                    <ListItem>Node.js</ListItem>
                                                    <ListItem>Express.js </ListItem>
                                                    <ListItem>MongoDB, Mongoose, Morgan and Multer</ListItem>
                                                    <ListItem>Bcrypt, Dotenv, JSON Web Token </ListItem>
                                                    <ListItem>Socket.IO</ListItem>
                                                    <ListItem>Middleware</ListItem>
                                                    <ListItem>Nodemon</ListItem>
                                                </UnorderedList>
                                            </Box>
                                        </HStack>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box
                                        pl={{ lg: "25px", base: "10px" }}
                                        pr={{ lg: "25px", base: "10px" }}
                                        pt={{ lg: "40px", base: "15px" }}
                                        pb={{ lg: "40px", base: "15px" }}
                                    >
                                        <HStack>
                                            <Box width={"100%"}>
                                                <Link target='_blank' href="https://github.com/farazshafi/hadithsoul">
                                                    <Button
                                                        size={{ base: "xs", lg: "lg", md: "md" }}
                                                        bgColor={"#164863"}
                                                        color={"white"}
                                                        width={"100%"}
                                                        _hover={{ backgroundColor: "#DDF2FD", color: "black" }}
                                                    >
                                                        GITHUB
                                                    </Button>
                                                </Link>
                                            </Box>
                                            {/* <Box width={"100%"}>
                                                <Link target='_blank' href="https://hadithsoul.com/">
                                                <Tooltip
                                                    label="Server needs to start, Please wait 1 minutes"
                                                    placement='bottom-end'
                                                    hasArrow
                                                    bg="#164863"
                                                >
                                                    <Button
                                                        size={{ base: "xs", lg: "lg", md: "md" }}
                                                        bgColor={"#164863"}
                                                        color={"white"}
                                                        width={"100%"}
                                                        _hover={{ backgroundColor: "#DDF2FD", color: "black" }}
                                                    >
                                                        LIVE
                                                    </Button>
                                                </Tooltip>
                                                </Link>
                                            </Box> */}
                                        </HStack>

                                    </Box>
                                </Box>
                            </Box>

                        </Col>
                        <Box
                            bgColor={"black"}
                            width={"100%"}
                            height={{ lg: "5px", base: "3px" }}
                        // mb={"10px"}
                        >
                        </Box>
                    </Row>
                </Box>
            </Box>
        </>
    )
}

export default Projects