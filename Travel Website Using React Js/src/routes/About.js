import Hero from "../components/Hero"
import Navbar from"../components/Navbar"
import AboutImg from"../assets/imag1.jpg"   

function About (){
    return (
        <>
        <Navbar/>
        <Hero 
        cName=".hero-mid"
        heroImg={AboutImg}

        title=""
        btnClass="hide"


        />
        </>
      
      
    );
}
export default About;