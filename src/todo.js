import react, { Component } from 'react';

class todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [],
            name: ""
        };
    }

    onInput = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    render(){
        const { todos } = this.state;

        return(
            <div>
                <input type="text" onInput={this.onInput} />
                <button>Submit</button>
                <ul>
                    { todos.map((todos, index) => <li key={index}>{todo}</li>)}
                </ul>
            </div>
        )
    }
}