import "./TripStyle.css"
import TripData from "./TripData"



function Trip ()  {
  return (
    <div className="trip">
        <h1>Recent Trip</h1>

        <p>
            you can discoverunique destination using google Maps
        </p>
        <div className="tripcard">
        <TripData image={Trip}
        heading ="Car hire at Bangalore is made easy with us. Discover very exciting van, bus rental offers and book online to travel like a king. - Siddeshwara Travels."
        />
        </div>
    </div>
  )
}
export default Trip;
