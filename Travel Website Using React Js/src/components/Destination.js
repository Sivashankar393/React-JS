import Mountain1 from "../assets/imag1.jpg";
import Mountain2 from "../assets/imag2.jpg";
import Mountain3 from "../assets/imag3.jpg";
import Mountain4 from "../assets/imag4.jpg";
import DestinationData from "./DestinationData";
import "./Destinationstyle.css";


const Destination = () =>{
    return(
        <div className="destination">
          <h1>Popular Destination</h1>
          <p>
            Tours give you the opportunity to see a lot,within a time frame
          </p>

   <DestinationData
   heading="Taal volvano,Batanges"
   text="Construction site with crane and building Word Template ... Add this service and get a template in your business colors within next 24 hours Service Cost ..."
   img1={Mountain1}
   img2={Mountain2}

   />
  <DestinationData
  className ="first-des-reverse"
  heading="Mt.daguldul,Batangas"
  text=""
  />
        </div>


    );
};

export default Destination;

