// pages/index.tsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  CardMedia,
  Card,
  CardContent,
  Link,
} from "@mui/material";
import Image from "next/image";
import NavigationBar from "@/components/Navigation";
import Box from "@mui/material/Box";
import HeroSection from "../sections/HeroSection";
import IntroSection from "@/sections/IntroSection";
import FeaturesSection from "../sections/FeaturesSection";
import AppPreview from "../sections/CTASection";
import Footer from "../sections/Footer";
import { useTheme , useMediaQuery} from "@mui/material";
import LinkedinIcon from "../assets/icons/linkedin";

const teamInfo = [{

    name:'Cindy Charvet',
    image:"/assets/team-cindy.png",
    title:'Frontend Developer and Project Manager',
    summary:'Web designer and developer with 3+ years of experience in WordPress, HTML, CSS, and recently JavaScript and project management. Proficient in crafting visually appealing web solutions, I excel in ensuring efficient project delivery and communication.',
    linkedIn:'https://www.linkedin.com/in/cindy-charvet/'
},
{
    name:'Rajat Chauhan',
    image:"/assets/team-rajat.png",
    title:'Full Stack Developer',
    summary:'Full-stack developer with 4+ years of experience using Redux, HTML, CSS, React, and Express.js. Currently using React JS for front-end development and NodeJs for backend development. Loves to dive into logical troubles to pave a path for scalable solutions. Possesses a never-ending thirst for knowledge.',
    linkedIn:'http://www.linkedin.com/in/rajatchauhan1323'
},
{
    name:'Rahasadat Emami',
    image:"/assets/team-raha.png",
    title:'Full Stack Developer',
    summary:'Began her educational journey in the field of chemical engineering but eventually found a deep interest in programming.',
    linkedIn:'https://www.linkedin.com/in/raha-emami/'
},
{
    name:'Magdeline Jannet',
    image:"/assets/team-jannet.png",
    title:'Fullstack Developer',
    summary:'Software Developer with experience in HTML, CSS, Javascript, Java & PHP. Curious to learn and work with new technologies.',
    linkedIn:'http://linkedin.com/in/magdeline-jannet'
},
{
    name:'Priscilla Morales Garcia',
    image:"/assets/team-pris.png",
    title:'Full Stack Developer',
    summary:'Visual Information Designer with 3+ years of experience in the design field. Knowledge of UX and recent interest and approach to web development (HTML/CSS/JS)',
    linkedIn:'https://www.linkedin.com/in/priscilla-moga'
},
{
    name:'Kyaw Shane',
    image:"/assets/team-shane.png",
    title:'Product Designer',
    summary:'A self-taught Art Director with over a decade of experience in the advertising and marketing industry. Passion for engaging with audiences and solving their problems through the combination of technology and creativity.',
    linkedIn:'https://www.linkedin.com/in/kyawshane/'
},

]



const About = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <NavigationBar />
      {/* Add more sections as needed */}
      <Box>
        <Box style={{backgroundImage:"url('/assets/AboutUsHeader.png')", color:"white", height:"350px",  width:isMobile?"100%":"100%", margin:isMobile?"0":"auto", padding:isMobile?"4rem 0":"4rem 0"}}>
            <Box style={{marginRight:isMobile?"0":"auto" ,
  marginLeft:isMobile?"1rem": "10rem"}}>
                <Box style={{padding:"1rem" , paddingBottom:"0"}}>
                    <h1 style={{color:"#FD9201", paddingLeft:"15px",borderLeft:"5px solid #FD9201", }}>ABOUT US</h1>
                </Box>
                <Box style={{width:isMobile?"100%":"45%" , paddingLeft:"20px"}}>
                    <h3 style={{padding:"1rem 0"}}>
                    TechTribe is a collaborative and diverse team that delivers  impactful solutions.
                    </h3>
                    <p>Our diverse team combines skills in branding, UX/UI, and visual design with expertise in front-end and back-end development, ensuring a comprehensive approach to project success through innovation and collaboration.</p>
                </Box>
            </Box>
        </Box>

        <Box style={{padding:"1rem", margin:"auto", width:isMobile?"100%": "80%"}}>
            <h2 style={{textAlign:"left", paddingLeft:isMobile?".5rem":"0", padding:"1rem 0"}}>Meet The Tech Tribe team</h2>

            <Box style={{display:"flex", flexDirection:isMobile?"column":"row" , gap:"1rem", flexWrap:"wrap", textAlign:"left",paddingLeft:isMobile?".5rem": "0"}}>
                {teamInfo.map((teamMember, index) => (
                    <Card key={index} style={{flex: isMobile ? "1 0 100%" : "1 0 31%", backgroundColor:"#F8F8FF"}}>
                        <CardContent>
                            <Box style={{display:"flex" , gap:"1rem"}}>
                                <Box style={{flex:"1 0 10%", boxSizing:"border-box", width:"100%"}}>
                                    <Image
                                        src={teamMember.image}
                                        alt="team member image"
                                        width={150}
                                        height={150}
                                    />
                                </Box>
                                <Box style={{flex:"80%"}}>
                                    <h3>{teamMember.name}</h3>
                                    <h4 style={{color:"#494949", padding:"1rem 0"}}>{teamMember.title}</h4>
                                    <Box>
                                        <Link href={teamMember.linkedIn}>
                                            <LinkedinIcon/>
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                            <p>{teamMember.summary}</p>
                        </CardContent>
                    </Card>
                ))}


               
            </Box>
        </Box >

        <Box style={{display:"flex", flexDirection:isMobile?"column":"row" , gap:"1rem", flexWrap:"wrap", textAlign:"left", marginLeft:isMobile?"0":"auto", width:isMobile?"100%":"89%", padding:isMobile?"1rem":"0", paddingBottom:"1rem",paddingLeft:isMobile?"1.5rem": "0"}}>
            <Card style={{flex: isMobile ? "1 0 100%" : "0 0 28.6%", backgroundColor:"#F8F8FF"}}>
                            <CardContent>
                                <Box style={{display:"flex" , gap:"1rem"}}>
                                    <Box style={{flex:"1 0 10%", boxSizing:"border-box", width:"100%"}}>
                                        <Image
                                            src="/assets/team-salman.png"
                                            alt="team member image"
                                            width={150}
                                            height={150}
                                        />
                                    </Box>
                                    <Box style={{flex:"80%"}}>
                                        <h3>Salman Shahzad</h3>
                                        <h4 style={{color:"#494949", padding:"1rem 0"}}>Product Designer</h4>
                                        <Box>
                                            <Link href="https://www.linkedin.com/in/shahzadsalman/">
                                                <LinkedinIcon/>
                                            </Link>
                                        </Box>
                                    </Box>
                                </Box>
                                <p>A skilled designer in UI/UX, animation, graphic design, and product design, having six years of experience in advertising and marketing. I am dedicated to enhancing user experiences through accessibility and a user-centered approach.</p>
                            </CardContent>
            </Card>
            <Card style={{flex: isMobile ? "1 0 100%" : "0 0 28.6%", backgroundColor:"#F8F8FF"}}>
                            <CardContent>
                                <Box style={{display:"flex" , gap:"1rem"}}>
                                    <Box style={{flex:"1 0 10%", boxSizing:"border-box", width:"100%"}}>
                                        <Image
                                            src="/assets/team-jade.png"
                                            alt="team member image"
                                            width={150}
                                            height={150}
                                        />
                                    </Box>
                                    <Box style={{flex:"80%"}}>
                                        <h3>Stephany Becerra</h3>
                                        <h4 style={{color:"#494949", padding:"1rem 0"}}>Product Designer</h4>
                                        <Box>
                                            <Link href="in/stephanyxjade/">
                                                <LinkedinIcon/>
                                            </Link>
                                        </Box>
                                    </Box>
                                </Box>
                                <p>An innovative UX/UI designer adept at crafting digital products through awesome design and fast problem-solving. High skills in User-Centric Design, Wireframing and Prototyping, Interaction Design, Usability Testing and Front-End Development.</p>
                            </CardContent>
            </Card>
        </Box>

      </Box>
      <Footer />
    </>
  );
};

export default About;
