import React from 'react'
import axios from 'axios'
import './App.css'

class App extends React.Component{
    state = {advise: ''}
    componentDidMount(){
        this.fetchAdvise()
    }
    fetchAdvise = () =>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
            const { advice } = response.data.slip
           this.setState({advice})
        })
        .catch((error)=>{
            console.log(error)

        })
    }
    render(){
        const {advice} = this.state


        return(
           <div className = "app">
               <div className = "card">

                   <h1 className = "heading">{advice}</h1>
                   <button onClick = {this.fetchAdvise} className="button">
                       <span>Give Me Motivation</span>
                       </button>
                   
               </div>
               
           </div>
        )
    }
    
}
export default App