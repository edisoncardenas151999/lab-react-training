function CreditCard({type,number,expirationMonth,expirationYear,bank, owner,bigColor,color}){

   
  const renderHiddenNumber = ()=>{
    const last4 = number.slice(-4); 
    const hidden =  `•••• •••• •••• `

  return `${hidden} ${last4}`
  }

    return(
        <div>
      <p>{type}</p>
      <p>{renderHiddenNumber()}</p>
      <p>{expirationMonth}</p>
      <p>{expirationYear}</p>
      <p>{bank}</p>
      <p>{owner}</p>
      <p>{bigColor}</p>
      <p>{color}</p> 
      </div>
    )
}





export default CreditCard;