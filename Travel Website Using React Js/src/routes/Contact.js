import Hero from "../components/Hero"
import Navbar from"../components/Navbar"
import AboutImg from"../assets/imag1.jpg"



function Contact (){
    return (
        <>
         <Navbar/>
        <Hero 
        cName=".hero-mid"
        heroImg={Contact}

        title="Contact"
        btnClass="hide"/>
        </>
    )
}
export default Contact;