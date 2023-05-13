import Hero from "../components/Hero"
import Navbar from"../components/Navbar"
import AboutImg from"../assets/imag1.jpg"

function Service (){
    return (
        <>
         <Navbar/>
        <Hero 
        cName=".hero-mid"heroImg={Service} title="Serivice"btnClass="hide"/>


        </>
    );
}
export default Service;