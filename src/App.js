// create your App component here
import React from 'react'
class App extends React.Component {

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => data)
    }

    render(){
        return(
            <div>
                Hello
            </div>
        )
    }
}
export default App