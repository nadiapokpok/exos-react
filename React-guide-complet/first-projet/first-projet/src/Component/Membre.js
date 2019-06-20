import React, { Fragment } from 'react'


/* version longue
const Membre = (props) => {
    const name = props.nom
    const sex = props.sexe
    console.log(props)
    return (
   <Fragment>
    <h2>Membres de la famille chat :{ name } {sex }</h2>
  
    </Fragment>   
   )
    }*/

//version simplifiée on écrit directement le/les paramètre(s)

const Membre = ( { nom, age, children }) =>{
    return(
        <Fragment>
        <h2>Membres de la famille chat : { nom } : {age}</h2>
        {children ? <p>{children}</p> :<Fragment/> }
        </Fragment> 
    )
}
export default Membre;