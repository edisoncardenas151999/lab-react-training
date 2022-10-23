function BoxColor({r,g,b}){
    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`
    }
    return(

        <div style={divStyle} className="colorBox">
        {divStyle.backgroundColor}
           
        </div>
        
    )

}




export default BoxColor;