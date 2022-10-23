import Rating from "./Rating"

function DriverCard({name,img,car,rating}){
return(

    <div>
     <p> <Rating>{rating}</Rating> </p> 
      <p> {name}</p> 
      <img
        src={img}
        alt="profile"
      />
      <p> {car.model}- {car.licensePlate}</p> 
    </div>
)
}






export default DriverCard;