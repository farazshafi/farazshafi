import React from 'react'
import { Box, HStack, Link, } from '@chakra-ui/react';

const GetInTouch = ({ col }) => {
    return (
        <>
            <Box
                // bgColor={"red"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                id={"contact"}
            >
                <Box
                    bgColor={col}
                    width={{ lg: "350px", base: "170px", md: "250px" }}
                    height={{ lg: "90px", base: "40px", md: "50px" }}
                    borderRadius={{ lg: "0px 0px 50px 50px", base: "0px 0px 20px 20px", md: "0px 0px 30px 30px" }}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    pt={{ lg: "10px", md: "6px", base: "3px" }}
                    pb={{ lg: "10px", md: "6px", base: "3px" }}
                >
                    <HStack spacing={{ lg: "37px", base: "20px" }}>
                        <Link target='_blank' href='https://github.com/farazshafi'>
                            <i id='contact-icon' style={{ color: col === "black" ? "#959595" : "#0072b1" }} class="fa-brands fa-github"></i>
                        </Link>
                        <Link target='_blank' href='https://www.linkedin.com/in/farazshafi/'>
                            <i id='contact-icon' style={{ color: col === "black" ? "#959595" : "#0072b1" }} class="fa-brands fa-linkedin"></i>
                        </Link>
                        <Link target='_blank' href='mailto: farazpachu777@gmai.com'>
                            <i id='contact-icon' style={{ color: col === "black" ? "#959595" : "#0072b1" }} class="fa-solid fa-envelope"></i>
                        </Link>
                        <Link target='_blank' href='https://wa.me/9188773788'>
                            <i id='contact-icon' style={{ color: col === "black" ? "#959595" : "#0072b1" }} class="fa-brands fa-whatsapp"></i>
                        </Link>
                    </HStack>
                </Box>
            </Box>
        </>
    )
}

export default GetInTouch
