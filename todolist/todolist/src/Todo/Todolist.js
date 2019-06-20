// utilsation de react raccourcis clavier rce
import React, {Component} from 'react';
//fonctionnalité qui permet de dire au programme qu'il peut rentrer du texte dans l'input
//userInput = texte dans l'input vide au départ
//items permet de dire au programme qu'un tableau est créé, pour l'instant mais on pourra stocker des valeurs

class Todolist extends Component{
    constructor(){
        super();
        this.state ={
            userInput:'',
            items:[]
            }
        };
        onChange(event){
            this.setState({
                userInput: event.target.value
            }, () => console.log(this.state.userInput));

        }
//permet d'ajouter le mot rentré dans userInput stocker ds le tableau
        addTodo(event){
            event.preventDefault();//pour éviter que la page  se recharge plusieurs foois
            this.setState({
                userInput:'',
                items: [...this.state.items, this.state.userInput] 
                
            },
            ()=>console.log(this.state)
            );}

//permet de supprimer un élément de la Todolist
        deleteTodo(item){
            
            const array = this.state.items;
            const index = array.indexOf(item);
            array.splice(index, 1);//à partir d'un endroit défini par l'index on supprime un elt
            this.setState({
                items: array
            });
        
        } 

//récupère le mot que l'on veut supprimer en appuyant sur la croix
    renderTodos(){
        return this.state.items.map((item) => {
            return (
                <div className="list-group-item" key={item}>
                    {item} <button onClick={this.deleteTodo.bind(this, item)} >X</button>
                </div>
            );
        });
    }

//permet de crére notre todolist en html avec render() avec le form + input
    render(){
        return(
            <div>
                <h1 align="center">La liste de Christopher et Nadia</h1>
                <form className="form-row align-items-center"> 
                   <input 
                   value={this.state.userInput}
                   type="text " 
                   placeholder="renseigner un champ"
                   onChange={this.onChange.bind(this)}
                   className="form-control mb-2"
                   />
                   <button 
                   onClick={this.addTodo.bind(this)}
                   className="btn btn-primary"
                   >
                       Ajouter
                    </button>
                </form>
                <div className="list-group">
                    {this.renderTodos()}
                </div>
            </div>
        );
    }
}
export default Todolist;