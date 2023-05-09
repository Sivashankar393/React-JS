import React from 'react'
import Employee from'./Employee'

class User extends React.Component {
name = "Siva Shankar"
age = 26
loc = "Thanjavur, Tamilnadu"
edetails = {
    email:"sivashankardct393@gmail  .com",
    Sal:  45555
}
  render() {
    return<div>
        <h2>User Component</h2>
       <hr/>
       <Employee ename={this.name}eage={this.age}email={this.email}/>
        </div>
    
  }
}

export default User