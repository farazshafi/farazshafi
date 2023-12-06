import React from 'react'
import SectionHead from './SectionHead'
import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import bootstrapLogo from "../images/frontEndSkills/bootstrap.png"
import cssLogo from "../images/frontEndSkills/css.png"
import chakraLogo from "../images/frontEndSkills/chakra.png"
import figmaLogo from "../images/frontEndSkills/figma.png"
import fontawsomeLogo from "../images/frontEndSkills/fontawsome.png"
import htmlLogo from "../images/frontEndSkills/html.png"
import lottiefilesLogo from "../images/frontEndSkills/lotte.png"
import muiLogo from "../images/frontEndSkills/mui.png"
import reactLogo from "../images/frontEndSkills/react.png"
import reduxLogo from "../images/frontEndSkills/redux.png"
import taliwanLogo from "../images/frontEndSkills/taliwan.png"
import somethingLogo from "../images/frontEndSkills/something.png"
import expressLogo from "../images/backendSkills/express.png"
import jwtLogo from "../images/backendSkills/jwt.png"
import mongodbLogo from "../images/backendSkills/mongodb.png"
import mongooseLogo from "../images/backendSkills/mongoose.png"
import nginxLogo from "../images/backendSkills/nginx.png"
import nodeLogo from "../images/backendSkills/node.png"
import npmLogo from "../images/backendSkills/npm.png"
import pm2Logo from "../images/backendSkills/pm2.png"
import paypalLogo from "../images/backendSkills/paypal.png"
import restapiLogo from "../images/backendSkills/restapi.png"
import socketLogo from "../images/backendSkills/socket.png"
import postmanLogo from "../images/otherSkills/postman.png"
import awsLogo from "../images/otherSkills/aws.png"
import digitaloceanLogo from "../images/otherSkills/digitalocean.png"
import githubLogo from "../images/otherSkills/github.png"
import gitLogo from "../images/otherSkills/git.png"
import herokuLogo from "../images/otherSkills/heroku.png"
import onrenderLogo from "../images/otherSkills/onrender.png"

const Skills = () => {
  return (
    <>
      <SectionHead text={"SKILLS"} />
      <Box
        pl={{ lg: "120px", base: "5%" }}
        pr={{ lg: "120px", base: "5%" }}
      >
        <VStack spacing={"50px"}>
          {/* Front-End skills */}
          <Box
            bgColor={"#DDF2FD"}
            width={"100%"}
            
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
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              mt={{ lg: "23px" }}
            >
              <VStack spacing={{ lg: "30px" }}>
                <HStack spacing={{ lg: "25px" }}>
                  <Box boxSize='120px'>
                    <Image src={htmlLogo} alt='html logo' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={cssLogo} alt='css logo' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={reactLogo} alt='React' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={muiLogo} alt='mui logo' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={reduxLogo} alt='redux logo' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={taliwanLogo} alt='taliwand logo' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={figmaLogo} alt='figma logo' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={bootstrapLogo} alt='bootstrap logo' />
                  </Box>
                </HStack>
                <HStack spacing={{ lg: "25px" }}>
                  <Box boxSize='120px'>
                    <Image src={lottiefilesLogo} alt='lotti logo' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={fontawsomeLogo} alt='fontawsome logo' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={chakraLogo} alt='chakra ui' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={somethingLogo} alt='something logo' />
                  </Box>
                </HStack>
              </VStack>
            </Box>
          </Box>
          {/* Back-End skills */}
          <Box
            // bgColor={"#DDF2FD"}
            width={"100%"}
            
            border={'10px solid '}
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
                  BACK-END
                </Text>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              mt={{ lg: "23px" }}
            >
              <VStack spacing={{ lg: "30px" }}>
                <HStack spacing={{ lg: "25px" }}>
                  <Box boxSize='120px'>
                    <Image src={nodeLogo} alt='logo' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={mongodbLogo} alt='mongodbLogo' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={mongooseLogo} alt='mongoose' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={socketLogo} alt='socketLogo' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={expressLogo} alt='expressLogo' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={pm2Logo} alt='pm2Logo' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={paypalLogo} alt='paypalLogo' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={npmLogo} alt='npmLogo' />
                  </Box>
                </HStack>
                <HStack spacing={{ lg: "25px" }}>
                  <Box boxSize='120px'>
                    <Image src={jwtLogo} alt='jwtLogo' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={nginxLogo} alt='nginxLogo' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={restapiLogo} alt='restapiLogo' />
                  </Box>
                </HStack>
              </VStack>
            </Box>
          </Box>
          {/* Other skills */}
          <Box
            bgColor={"#DDF2FD"}
            width={"100%"}
            border={'10px solid '}
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
                  OTHER
                </Text>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              mt={{ lg: "23px" }}
            >
              <VStack spacing={{ lg: "30px" }}>
                <HStack spacing={{ lg: "25px" }}>
                  <Box boxSize='120px'>
                    <Image src={awsLogo} alt='awsLogo' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={digitaloceanLogo} alt='digitaloceanLogo' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={gitLogo} alt='gitLogo' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={postmanLogo} alt='postmanLogo' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={onrenderLogo} alt='onrenderLogo' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={herokuLogo} alt='herokuLogo' />
                  </Box>
                  <Box boxSize='120px'>
                    <Image src={githubLogo} alt='githubLogo' />
                  </Box>
                </HStack>
              </VStack>
            </Box>
          </Box>
        </VStack>
      </Box>
    </>
  )
}

export default Skills