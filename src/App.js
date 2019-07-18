import React from 'react';

export default class App extends React.Component{

    state={
        people: []
    }

    render(){
        return(
            <div>
                {this.state.people.map( person => {
                    return(<ol>
                        <li>{person.name}</li>
                        <li>{person.craft}</li>
                    </ol>)
                } )}
            </div>
        )
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(result =>  this.setState({people: [...result.people]}))
    }
}