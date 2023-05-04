import { Component } from "react";
import Table from './Table';



class App extends Component{
  render(){
    return(
      <div className>
        <h1>Table1</h1>
        <Table/>
        <h1>Table2</h1>
        <Table/>
      </div>
    )
  }
}
export default App;