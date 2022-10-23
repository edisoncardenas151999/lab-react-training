function Random({min, max}){
  const total = Math.floor(Math.random() * (max - min)) + min;
    return(
   <p className="random">Random Value Between {min} and {max} = {total}</p>

    )
}





export default Random;