import React from 'react'
import SectionHead from './SectionHead'
import { Box, HStack, Image, Text } from '@chakra-ui/react'

const Skills = () => {
  return (
    <>
      <SectionHead text={"SKILLS"} />
      <Box
        pl={{ lg: "120px", base: "5%" }}
        pr={{ lg: "120px", base: "5%" }}
      >
        <Box
          bgColor={"#DDF2FD"}
          width={"100%"}
          height={"405px"}
          border={'10px solid '}
          // pt={{ lg: "70px", base: "5%" }}
          pb={{ lg: "70px", base: "5%" }}
          pr={{ lg: "70px", base: "5%" }}
          pl={{ lg: "70px", base: "5%" }}
        >
          <Box
            mt={"-34px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              bgColor={"#164863"}
              width={"fit-content"}
              pl={"10px"}
              pr={"10px"}
              pb={"10px"}
              pt={"10px"}
            >
              <Text
                fontFamily={"Poppins"}
                color={"white"}
                fontWeight={700}
                alignItems={"center"}
                textAlign={"center"}
                fontSize={{ lg: "25px" }}
              >
                FRONT-END
              </Text>
            </Box>
          </Box>
          <Box
            height={"100%"}
            bgColor={"red"}
            mt={{ lg: "23px" }}
          >
            <HStack spacing={{lg:"25px"}}>
              <Box boxSize='120px'>
                <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
              </Box>
              <Box boxSize='120px'>
                <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
              </Box>
              <Box boxSize='120px'>
                <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
              </Box>
              <Box boxSize='120px'>
                <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
              </Box>
              <Box boxSize='120px'>
                <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
              </Box>
              <Box boxSize='120px'>
                <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
              </Box>
              <Box boxSize='120px'>
                <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
              </Box>
              <Box boxSize='120px'>
                <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
              </Box>
            </HStack>
          </Box>

        </Box>
      </Box>
    </>
  )
}

export default Skills