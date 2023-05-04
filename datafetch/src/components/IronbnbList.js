import { useState, useEffect } from "react"
import axios from "axios"
 
const apiURL = "https://ironbnb-m3.herokuapp.com/apartments"
 
function IronbnbList() {
  const [fetching, setFetching] = useState(true)
  const [apartments, setApartments] = useState([])
 
  useEffect(() => {
    console.log("IronbnbList is mounted")
    axios.get(apiURL).then((response) => {
      setApartments(response.data)
      setFetching(false)
    })
  }, [])
 
  return (
    <div className="IronbnbList">
      <h3>List of apartments</h3>
      {fetching && <p>Loading ...</p>}
 
      {apartments.map((apartment) => {
        return (
          <div key={apartment._id} className="card">
            <img src={apartment.img} alt="apartment" />
            <h3>{apartment.title}</h3>
            <p>Price: {apartment.pricePerDay}</p>
          </div>
        )
      })}
    </div>
  )
}
 
export default IronbnbList
