import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import GetInTouch from "../component/GetInTouch"

const Footer = () => {
    return (
        <Box
            bgColor={"black"}
            pt={{ lg: "15px", base:"10px",md:"15px" }}
            pb={{ lg: "15px", base:"10px",md:"15px" }}

        >
            <Text
            textAlign={"center"}
            color={"white"}
            >
               FARAZ SHAFI
            </Text>
            <Text
            mt={"10px"}
                textAlign={"center"}
                color={"rgba(255, 255, 255, 0.50)"}
            >
                copyright © 2023 | faraz shafi
            </Text>
            <GetInTouch col={"black"} />
        </Box>
    )
}

export default Footer