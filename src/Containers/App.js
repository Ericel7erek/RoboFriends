import React, { useState, useEffect } from 'react';
import CardList from '../Components/CardList';
// import { robots } from './robots';
import SearchBox from '../Components/SearchBox';
import'./App.css'
import Scroll from '../Components/Scroll'
import ErrorBoundry from '../Components/ErrorBoundry';

function App(){
//   constructor() {
//     super()
//       this.state = {
//       robots: [],
//       searchfield: '',
//   }
// }
// componentDidMount() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response=>response.json())
//   .then(users=> this.setState({ robots: users }))}
const [robots, setRobots] = useState([])
const [searchfield, setSearchfield] = useState('')

useEffect(()=>{

  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(users=> {setRobots( users )})

},[])

const OnSearchChange = (event) => {
  setSearchfield(event.target.value )
}

    
    const filteredRobots = robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    
    return (!robots.length)?
      
        <h1 className='tc'>Loading</h1> :
      
     
  (
    
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      
      <SearchBox searchChange={OnSearchChange}/>
      <Scroll>
        <ErrorBoundry>
      <CardList robots = {filteredRobots} />
      </ErrorBoundry>
      </Scroll>
    </div> 
    );
    
  }


export default App;