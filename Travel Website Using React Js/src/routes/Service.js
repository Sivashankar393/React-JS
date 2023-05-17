import Hero from "../components/Hero"
import Navbar from"../components/Navbar"
import AboutImg from"../assets/imag6.jpg"
import Footer from"../components/Footer";

function Service (){
    return (
        <>
         <Navbar/>
        <Hero 
        cName=".hero-mid"heroImg={AboutImg} title="Serivice"btnClass="hide"
        />
 <Trip/>
 <Footer/>

        </>
    );
}
export default Service;