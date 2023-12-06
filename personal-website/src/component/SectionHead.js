import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const SectionHead = ({text,center}) => {
    return (
        <Box
            mt={{ base: "25px", md: "", lg: "80px" }}
            pl={"5%"}
            pr={"5%"}
            mb={{ base: "20px", md: "30px", lg: "40px" }}
            display={"flex"}
            style={{alignItems:center ? "center" : "none",justifyContent: center ? "center" : "none"}} 
        >
            <Box
                pt={{ lg: "15px", base: "6px", }}
                pl={{ lg: "15px",md:"11px" , base: "8px", }}
                pr={{ lg: "15px",md:"11px" , base: "8px", }}
                border={"2px solid"}
                color={'black'}
                width={"auto"}
                height={{ lg: "75px", base: "27px", md: "35px" }}
            >
                <Text
                    fontFamily={"Timmana"}
                    color={"black"}
                    fontSize={{ lg: "40px", base: "12px", md: "20px" }}
                >
                    {text}
                </Text>
            </Box>
        </Box>
    )
}

export default SectionHead
