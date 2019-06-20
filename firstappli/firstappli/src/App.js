import React, { Component } from 'react';
import Welcome from './Welcome'

import './App.css';

//la méthode render()permet de rendre lisible un component dans le DOM
//ensuite on utilise return ()
class App extends Component {
  render(){
    return(
      <div>
     {/* on donne une key name et 1 valeur qui peux etre utilisée sous forme
    de props ds mon component */}
   <Welcome name="Bichka"/>
   <Welcome name="Rouxminet"/>
   </div>
//j'appelle mon component enfant "Welcome.js" et je viens lui passer une valeur
//qui se nomme name et à laquelle j'ai affecté Bichka
//on passe du parent vers l'enfant une valeur qui s'appelle name
    );
  }
}



export default App;
