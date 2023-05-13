import Destination from "../components/Destination";
import Hero from "../components/Hero"
import Navbar from"../components/Navbar"
function Home (){
    return (
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg="https://as1.ftcdn.net/v2/jpg/00/22/43/56/1000_F_22435669_2k90nSnt27pZ3xmpnHbXlsHdJoXxmBBf.jpg"

        title="karur creane open in 24 hours"
        text="Choose your Favourite Destination"
        buttonText="Travel plan"
        url="/"
        btnClass="show"


        />
        </>
    )
}   
export default Home;