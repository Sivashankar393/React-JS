import React from 'react'
class Message extends React.Component{
    msg = "Hello....."

 gmHandler = () => {
console.log("Inside GM Handler")
this.msg = "GM Rahul Gandhi"
console.log,(this.msg)
this.forceupdate()
 }
 render(){

  return<div>
        <h2>Message Component</h2>
        <h3>Message Value:{this.msg}</h3>
        <button onClick={this.gmhandler}>GM</button>
        <button>GN</button>
        </div>
  
}
}