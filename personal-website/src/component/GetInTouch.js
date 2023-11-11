import React from 'react'
import { Box, HStack, } from '@chakra-ui/react';

const GetInTouch = () => {
    return (
        <>
            <Box
                // bgColor={"red"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Box
                    bgColor={"#DDF2FD"}
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
                        <i id='contact-icon' class="fa-brands fa-github"></i>
                        <i id='contact-icon' style={{ color: "#0072b1" }} class="fa-brands fa-linkedin"></i>
                        <i id='contact-icon' class="fa-solid fa-envelope"></i>
                    </HStack>
                </Box>
            </Box>
        </>
    )
}

export default GetInTouch
