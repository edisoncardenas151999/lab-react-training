function Greetings({lang, children}){
    if(lang === "de"){
      return  <p>Holla {children}</p>
    }
    else if(lang ==="fr"){
       return  <p className="fr" >Bonjour {children} </p>
    }
    else if(lang === "en"){
       return  <p className="en">Hello {children}</p>
    }
    else {
       <p>Hello John</p>
    }

}
export default Greetings;