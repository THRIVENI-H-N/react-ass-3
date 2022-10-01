import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClassComponents from "./components/ClassComponents";
import "./components/style.css";
import ClassComponents2 from "./components/ClassComponents2";

class App extends React.components{
  constructor(){
    super();
    this.state = {
        arr:[],
    }
} 
  updateUsers=(updatedUsers)=>{
    this.setState({arr:updatedUsers})
  }
  render(){
  return ( 
   <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element = {<ClassComponents users = {this.state.arr} updateUsers = {this.updateUsers}/>}/>
    <Route path='/ClassComponents2' element = {<ClassComponents2 users = {this.state.arr} />}/>
    </Routes>
    </BrowserRouter>
  
   
    </div>
  );
}
}

export default App;
