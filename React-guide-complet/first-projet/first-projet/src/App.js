import React, { Component, Fragment } from 'react';
import './App.css';
import Membre from './Component/Membre'
import Button from './Component/Button'

const famille = {
   membre1:{
      nom: 'Titus Sacapuce',
      sexe:'male',
      age: 15
   },
   membre2:{
      nom: 'Debilus',
      sexe:'male',
      age: 15
   },
   membre3:{
      nom: 'Pirouette',
      sexe:'femelle',
      age: 18
   },
   membre4:{
      nom: 'Djaha',
      sexe:'male',
      age: 19
   },
   membre5:{
      nom: 'Griotte',
      sexe:'femelle',
      age: 9
   },
   membre6:{
      nom: 'Whisper',
      sexe:'femellle',
      age: 2
   },
   membre7:{
      nom: 'Bichka',
      sexe:'male',
      age:8
   },
   membre8:{
      nom: 'Pompon',
      sexe:'male',
      age: 4
   }
}

class App extends Component {
  state = {
    famille
  }
   //pour faire un chgt d'état on utilise setState
   //on crée une const et on lui affecte comme valeur la copie du state ici famille
   //puis on lui dit ce que l'on veut changer dans famille
   //dernière étape on lui renvois famille pour le mettre à jour
  handleClick = () => {
     console.log(this.state.famille)
     const famille = {...this.state.famille}
     famille.membre1.age += 1
     this.setState({ famille })
  }

  render(){
    //version destructurée
    //const { titre } = this.props
    //<h1> { titre } </h1>
    const { titre } = this.props
    const { famille } = this.state
    return (
      <Fragment>
     <div className="App">
     <h1>{ titre }</h1>
      <p>Miaou miaou miaou</p>
     <input type='text'/>
     <Membre 
        nom={famille.membre1.nom}
        age={famille.membre1.age}/>
     <Membre 
        nom={famille.membre2.nom}
        age={famille.membre2.age}/>
     <Membre 
        nom={famille.membre3.nom}
        age={famille.membre3.age}/>
     <Membre 
        nom={famille.membre4.nom}
        age={famille.membre4.age}/>
     <Membre 
        nom={famille.membre5.nom}
        age={famille.membre5.age}/>
     <Membre 
        nom={famille.membre6.nom}
        age={famille.membre6.age}/>
     <Membre 
        nom={famille.membre7.nom}
        age={famille.membre7.age}/>
     <Membre 
        nom={famille.membre8.nom}
        age={famille.membre8.age}/>
      <Button vieillir={this.handleclick}/>
     </div>
     </Fragment>
    )
  }
 
}

export default App;
