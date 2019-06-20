//ici on a accés aux proriétés de react et au component
import React, { Component } from 'react';
//ici le component à accès à la bibliothèque react
//généralement on appelle notre component du meme nom que le fichier
//on utilise la méthode this.state pour modifier un state
//ds la class on crée les méthodes avec setState
//ensuite on utilise le render
class Welcome extends Component{
    constructor(){
        super();
        this.state = {
            count:0
        }
    }

    removeOne(){
        this.setState({
            count: this.state.count - 1
        })
    }

    AddOne(){
        this.setState({
            count: this.state.count + 1
        });
    }
    
    render() {
        return (
            <div>
                {/* on accède ici à notre valeur name
                je passe de mon parent à mon enfant une valeur
                qui s'appelle name */}
            <h1>Bienvenue { this.props.name }</h1>
            <p>Mon compteur : { this.state.count }</p>
            <button onClick= { () => this.AddOne()}>ajoute 1</button>
            <button onClick={this.removeOne.bind(this)}>enlever 1</button>
            </div>
        );
    }
}

export default Welcome;