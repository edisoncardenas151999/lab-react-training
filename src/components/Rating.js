function Rating({children}){
    console.log(children)
  const renderStars = ()=>{
    
    let numOfStars =  Math.round(children)
    
    
    
   return `★`.repeat(numOfStars) + `☆`.repeat(5-numOfStars)
   
  }
    return(

        <div>
      {renderStars()}
        </div>
    )
}







export default Rating;