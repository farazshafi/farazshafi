import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const SectionHead = () => {
    return (
        <Box
            mt={{ base: "25px", md: "", lg: "80px" }}
            pl={{ base: "10px", md: "70px", lg: "123px" }}
            pr={{ base: "10px", md: "70px", lg: "123px" }}
            mb={{ base: "20px", md: "", lg: "40px" }}
        >
            <Box
                pt={{ lg: "15px", base: "6px", }}
                pl={{ lg: "15px", base: "8px", }}
                pr={{ lg: "15px", base: "8px", }}
                border={"2px solid"}
                color={'black'}
                width={{ lg: "232px", base: "80px", md: "119px" }}
                height={{ lg: "75px", base: "27px", md: "35px" }}
            >
                <Text
                    fontFamily={"Timmana"}
                    color={"black"}
                    fontSize={{ lg: "40px", base: "12px", md: "20px" }}
                >
                    WHO IS ME ?
                </Text>
            </Box>
        </Box>
    )
}

export default SectionHead
