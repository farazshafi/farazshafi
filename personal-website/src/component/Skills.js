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
import JsLogo from "../images/frontEndSkills/javaLogo.png"
import expressLogo from "../images/backendSkills/express.png"
import jwtLogo from "../images/backendSkills/jwt.png"
import mongodbLogo from "../images/backendSkills/mongodb.png"
import mongooseLogo from "../images/backendSkills/mongoose.png"
import nginxLogo from "../images/backendSkills/nginx.png"
import nodeLogo from "../images/backendSkills/node.png"
import npmLogo from "../images/backendSkills/npm.png"
import pm2Logo from "../images/backendSkills/pm2.png"
import paymentLogo from "../images/backendSkills/paymentLogo.png"
import restapiLogo from "../images/backendSkills/restapi.png"
import socketLogo from "../images/backendSkills/socket.png"
import postmanLogo from "../images/otherSkills/postman.png"
import awsLogo from "../images/otherSkills/aws.png"
import digitaloceanLogo from "../images/otherSkills/digitalocean.png"
import githubLogo from "../images/otherSkills/github.png"
import gitLogo from "../images/otherSkills/git.png"
import herokuLogo from "../images/otherSkills/heroku.png"
import onrenderLogo from "../images/otherSkills/onrender.png"
import { Tooltip } from '@chakra-ui/react'
import { Col, Container, Row } from "react-bootstrap"

const Skills = () => {
  return (
    <>
      <SectionHead i={"skills"} text={"SKILLS"} />
      {/* frontEnd skills */}
      <Box
        pl={{ lg: "120px", base: "5%" }}
        pr={{ lg: "120px", base: "5%" }}
        mb={{ lg: "20px", base: "10px" }}

      >
        <Box
          bgColor={"#164863"}
          width={"fit-content"}
          pl={{ lg: "10px", base: "6px", md: "8px" }}
          pr={{ lg: "10px", base: "6px", md: "8px" }}
          pt={{ lg: "10px", base: "6px", md: "8px" }}
          
          display="flex"
          justifyContent="center"
          alignItems="center"
          margin="auto"
        >
          <Text
            fontFamily={"Poppins"}
            color={"white"}
            fontWeight={700}
            textAlign={"center"}
            fontSize={{ lg: "25px", base: "8px", md: "18px" }}
          >
            FRONT-END
          </Text>
        </Box>
        <Container id="skills-container" style={{ border: "10px solid #1a202c", background: "#ddf3fc" }}>
          <Row>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Tooltip bg="#164863" hasArrow label="HTML">
                  <Image src={htmlLogo} alt="HTML logo" />
                </Tooltip>
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Tooltip bg="#164863" hasArrow label="CSS">
                  <Image src={cssLogo} alt="CSS logo" />
                </Tooltip>
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Tooltip bg="#164863" hasArrow label="JAVA SCRIPT">
                  <Image src={JsLogo} alt='js' />
                </Tooltip>
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Tooltip bg="#164863" hasArrow label="REACT">
                  <Image src={reactLogo} alt='React' />
                </Tooltip>
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Tooltip bg="#164863" hasArrow label="MUI">
                  <Image src={muiLogo} alt='mui logo' />
                </Tooltip>
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Tooltip bg="#164863" hasArrow label="REDUX">
                  <Image src={reduxLogo} alt='redux logo' />
                </Tooltip>
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Tooltip bg="#164863" hasArrow label="TALIWAN">
                  <Image src={taliwanLogo} alt='taliwand logo' />
                </Tooltip>
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Tooltip bg="#164863" hasArrow label="FIGMA">
                  <Image src={figmaLogo} alt='figma logo' />
                </Tooltip>
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Tooltip bg="#164863" hasArrow label="BOOTSTRAP">
                  <Image src={bootstrapLogo} alt='bootstrap logo' />
                </Tooltip>
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Tooltip bg="#164863" hasArrow label="LOTTIEFILES">
                  <Image src={lottiefilesLogo} alt='lotti logo' />
                </Tooltip>
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Tooltip bg="#164863" hasArrow label="FONTAWSOME">
                  <Image src={fontawsomeLogo} alt='fontawsome logo' />
                </Tooltip>
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Tooltip bg="#164863" hasArrow label="CHAKRA">
                  <Image src={chakraLogo} alt='chakra ui' />
                </Tooltip>
              </Box>
            </Col>
          </Row>
        </Container>

        {/* past here vstack  */}
      </Box>
      {/* backEnd skills */}
      <Box
        pl={{ lg: "120px", base: "5%" }}
        pr={{ lg: "120px", base: "5%" }}
        mb={{ lg: "20px", base: "10px" }}
      >
        <Box
          bgColor={"#164863"}
          width={"fit-content"}
          pl={{ lg: "10px", base: "6px", md: "8px" }}
          pr={{ lg: "10px", base: "6px", md: "8px" }}
          pt={{ lg: "10px", base: "6px", md: "8px" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          margin="auto"
        >
          <Text
            fontFamily={"Poppins"}
            color={"white"}
            fontWeight={700}
            textAlign={"center"}
            fontSize={{ lg: "25px", base: "8px", md: "18px" }}
          >
            BACK-END
          </Text>
        </Box>
        <Container id="skills-container" style={{ border: "10px solid #1a202c", background: "#ddf3fc" }}>
          <Row>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Tooltip bg="#164863" hasArrow label="NODE">
                  <Image src={nodeLogo} alt='NODE logo' />
                </Tooltip>
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Tooltip bg="#164863" hasArrow label="MONGODB">
                  <Image src={mongodbLogo} alt='mongodbLogo' />
                </Tooltip>
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Tooltip bg="#164863" hasArrow label="MONGOOSE">
                  <Image src={mongooseLogo} alt='mongoose' />
                </Tooltip>
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Tooltip bg="#164863" hasArrow label="SOCKET.IO">
                  <Image src={socketLogo} alt='socketLogo' />
                </Tooltip>
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Tooltip bg="#164863" hasArrow label="EXPRESS">
                  <Image src={expressLogo} alt='expressLogo' />
                </Tooltip>
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Tooltip bg="#164863" hasArrow label="PM2">
                  <Image src={pm2Logo} alt='pm2Logo' />
                </Tooltip>
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Tooltip bg="#164863" hasArrow label="PPAYMENT INTEGRATION">
                  <Image src={paymentLogo} alt='paymentLogo' />
                </Tooltip>
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Tooltip bg="#164863" hasArrow label="NPM">
                  <Image src={npmLogo} alt='npmLogo' />
                </Tooltip>
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Tooltip bg="#164863" hasArrow label="JWT">
                  <Image src={jwtLogo} alt='jwtLogo' />
                </Tooltip>
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Tooltip bg="#164863" hasArrow label="NGINX">
                  <Image src={nginxLogo} alt='nginxLogo' />
                </Tooltip>
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Tooltip bg="#164863" hasArrow label="REST-API">
                  <Image src={restapiLogo} alt='restapiLogo' />
                </Tooltip>
              </Box>
            </Col>
          </Row>
        </Container>

        {/* past here vstack  */}
      </Box>
      {/* other skills */}
      <Box
        pl={{ lg: "120px", base: "5%" }}
        pr={{ lg: "120px", base: "5%" }}
        mb={{ lg: "20px", base: "20px" }}
      >
        <Box
          bgColor={"#164863"}
          width={"fit-content"}
          pl={{ lg: "10px", base: "6px", md: "8px" }}
          pr={{ lg: "10px", base: "6px", md: "8px" }}
          pt={{ lg: "10px", base: "6px", md: "8px" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          margin="auto"
        >
          <Text
            fontFamily={"Poppins"}
            color={"white"}
            fontWeight={700}
            textAlign={"center"}
            fontSize={{ lg: "25px", base: "8px", md: "18px" }}
          >
            OTHER
          </Text>
        </Box>
        <Container id="skills-container" style={{ border: "10px solid #1a202c", background: "#ddf3fc" }}>
          <Row>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Image src={awsLogo} alt='awsLogo' />
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Image src={digitaloceanLogo} alt='digitaloceanLogo' />
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Image src={gitLogo} alt='gitLogo' />
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Image src={postmanLogo} alt='postmanLogo' />
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Image src={onrenderLogo} alt='onrenderLogo' />
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Image src={herokuLogo} alt='herokuLogo' />
              </Box>
            </Col>
            <Col className="skills-col" lg={2} md={4} sm={2} xs={2}>
              <Box boxSize={{ lg: "120px", base: "30px", md: "50px" }}>
                <Image src={githubLogo} alt='githubLogo' />
              </Box>
            </Col>
          </Row>
        </Container>

        {/* past here vstack  */}
      </Box>
    </>
  )
}





export default Skills
