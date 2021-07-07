// create your App component here
import React, {component} from 'react'


class App extends React.Component{
 state={
     displayPeople:[]
 }
 componentDidMount(){
     fetch('http://api.open-notify.org/astros.json')
     .then(res=> res.json())
     .then(data =>{
         console.log(data)
         this.setState(
            displayPeople: data.people
        )
     })
    
 }

 render(){
     return(
         <div>
        
         </div>
     )
 }
 
}
export default App