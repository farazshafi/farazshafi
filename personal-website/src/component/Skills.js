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
      <SectionHead i={"skills"} text={"SKILLS"} />
      <Box
        pl={{ lg: "120px", base: "5%" }}
        pr={{ lg: "120px", base: "5%" }}
      >
        <VStack spacing={{ lg: "50px", base: "25px", md: "35px" }}>
          {/* Front-End skills */}
          <Box
            bgColor={"#DDF2FD"}
            width={"100%"}

            border={{ lg: '10px solid ', base: '5px solid' }}
            pb={{ lg: "70px", base: "5%", md: "40px" }}
            pr={{ lg: "70px", base: "5%", md: "40px" }}
            pl={{ lg: "70px", base: "5%", md: "40px" }}
          >
            <Box
              mt={{ lg: "-34px", base: "-14.5px", md: "-23.5px" }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                bgColor={"#164863"}
                width={"fit-content"}
                pl={{ lg: "10px", base: "6px", md: "8px" }}
                pr={{ lg: "10px", base: "6px", md: "8px" }}
                pb={{ lg: "10px", base: "6px", md: "8px" }}
                pt={{ lg: "10px", base: "6px", md: "8px" }}
              >
                <Text
                  fontFamily={"Poppins"}
                  color={"white"}
                  fontWeight={700}
                  alignItems={"center"}
                  textAlign={"center"}
                  fontSize={{ lg: "25px", base: "8px", md: "18px" }}
                >
                  FRONT-END
                </Text>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              mt={{ lg: "23px", base: "10px" }}
            >
              <VStack spacing={{ lg: "30px", base: "15px", md: "25px" }}>
                <HStack spacing={{ lg: "25px", base: "10px", md: "15px" }}>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                    <Image src={htmlLogo} alt='html logo' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                    <Image src={cssLogo} alt='css logo' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                    <Image src={reactLogo} alt='React' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                    <Image src={muiLogo} alt='mui logo' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                    <Image src={reduxLogo} alt='redux logo' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                    <Image src={taliwanLogo} alt='taliwand logo' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                    <Image src={figmaLogo} alt='figma logo' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                    <Image src={bootstrapLogo} alt='bootstrap logo' />
                  </Box>
                </HStack>
                <HStack spacing={{ lg: "25px", base: "10px", md: "15px" }}>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                    <Image src={lottiefilesLogo} alt='lotti logo' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                    <Image src={fontawsomeLogo} alt='fontawsome logo' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                    <Image src={chakraLogo} alt='chakra ui' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                    <Image src={somethingLogo} alt='something logo' />
                  </Box>
                </HStack>
              </VStack>
            </Box>
          </Box>
          {/* Back-End skills */}
          <Box
            width={"100%"}
            border={{ lg: '10px solid', base: '5px solid' }}
            pb={{ lg: "70px", base: "5%" }}
            pr={{ lg: "70px", base: "5%" }}
            pl={{ lg: "70px", base: "5%" }}
          >
            <Box
              mt={{ lg: "-34px", base: "-14.5px", md: "-23.5px" }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                bgColor={"#164863"}
                width={"fit-content"}
                pl={{ lg: "10px", base: "6px", md: "8px" }}
                pr={{ lg: "10px", base: "6px", md: "8px" }}
                pb={{ lg: "10px", base: "6px", md: "8px" }}
                pt={{ lg: "10px", base: "6px", md: "8px" }}
              >
                <Text
                  fontFamily={"Poppins"}
                  color={"white"}
                  fontWeight={700}
                  alignItems={"center"}
                  textAlign={"center"}
                  fontSize={{ lg: "25px", base: "8px", md: "18px" }}
                >
                  BACK-END
                </Text>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              mt={{ lg: "23px", base: "10px" }}
            >
              <VStack spacing={{ lg: "30px", base: "15px" }}>
                <HStack spacing={{ lg: "25px", base: "10px", md: "15px" }}>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>

                    <Image src={nodeLogo} alt='logo' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>

                    <Image src={mongodbLogo} alt='mongodbLogo' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>

                    <Image src={mongooseLogo} alt='mongoose' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>

                    <Image src={socketLogo} alt='socketLogo' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>

                    <Image src={expressLogo} alt='expressLogo' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>

                    <Image src={pm2Logo} alt='pm2Logo' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>

                    <Image src={paypalLogo} alt='paypalLogo' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>

                    <Image src={npmLogo} alt='npmLogo' />
                  </Box>
                </HStack>
                <HStack spacing={{ lg: "25px", base: "10px", md: "15px" }}>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>

                    <Image src={jwtLogo} alt='jwtLogo' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>

                    <Image src={nginxLogo} alt='nginxLogo' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>

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
            border={{ lg: '10px solid', base: '5px solid' }}
            mb={{ lg: "50px", base: "25px", md: "35px" }}
            pb={{ lg: "70px", base: "5%" }}
            pr={{ lg: "70px", base: "5%" }}
            pl={{ lg: "70px", base: "5%" }}
          >
            <Box
              mt={{ lg: "-34px", base: "-14.5px", md: "-23.5px" }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                bgColor={"#164863"}
                width={"fit-content"}
                pl={{ lg: "10px", base: "6px", md: "8px" }}
                pr={{ lg: "10px", base: "6px", md: "8px" }}
                pb={{ lg: "10px", base: "6px", md: "8px" }}
                pt={{ lg: "10px", base: "6px", md: "8px" }}
              >
                <Text
                  fontFamily={"Poppins"}
                  color={"white"}
                  fontWeight={700}
                  alignItems={"center"}
                  textAlign={"center"}
                  fontSize={{ lg: "25px", base: "8px", md: "18px" }}
                >
                  OTHER
                </Text>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              mt={{ lg: "23px", base: "10px" }}
            >
              <VStack spacing={{ lg: "30px", base: "15px" }}>
                <HStack spacing={{ lg: "25px", base: "10px", md: "15px" }}>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                    <Image src={awsLogo} alt='awsLogo' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                    <Image src={digitaloceanLogo} alt='digitaloceanLogo' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                    <Image src={gitLogo} alt='gitLogo' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                    <Image src={postmanLogo} alt='postmanLogo' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                    <Image src={onrenderLogo} alt='onrenderLogo' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                    <Image src={herokuLogo} alt='herokuLogo' />
                  </Box>
                  <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
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