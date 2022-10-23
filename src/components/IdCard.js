


function IdCard({firstName, lastName, gender, height, birth, picture}){
    return (
        <div className='box'>
           <img
        src={picture}
        alt="profile"
      /> 
  <div>
       <p>First Name:{firstName}</p>
       <p> Last Name:{lastName}</p>
       <p>Gender:{gender}</p>
       <p>Birth:{birth.toDateString()}</p>
       <p>Height:{height}</p>
    
</div>

        </div>
      );
}
export default IdCard;