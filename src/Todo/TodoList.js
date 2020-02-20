import React , { Component } from 'react';

class TodoList extends Component { 
    constructor(){
        super();
        this.state = {
            userInput : '',
            items: []
        };
    }

    onChange(e){
        this.setState({
            userInput: e.target.value
        });
    }

    addTodo(e){
        e.preventDefault();
        this.setState({
            userInput : '',
            items: [...this.state.items, this.state.userInput]
        });
    }

    deleteTodo(e){
        e.preventDefault();
        const array = this.state.items;
        const index = array.indexOf(e.target.value);
        array.splice(index,1);
        this.setState({
            items: array
        });
    }

    renderTodos() {
        return this.state.items.map((item) => {
            return (
                <div className="btn-toolbar" key={item}>
                        {item} | <button align="right" className="btn-danger" onClick={this.deleteTodo.bind(this)}>X</button>
                </div>
            );
        })
    }

    render() {
        return (
        <div>
            <h1 align="center">Ma Todo List</h1>
            <form className="form-group">
                <input value={this.state.userInput} 
                type="text" placeholder="Veuillez renseigner un item"
                onChange={this.onChange.bind(this)}
                class="form-control"
                ></input>
                <br></br><button class="btn btn-primary" onClick={this.addTodo.bind(this)}>Ajouter</button>
            </form>
            <div className="list-group">
                {this.renderTodos()}
            </div>
        </div>
        )
    }
}

export default TodoList