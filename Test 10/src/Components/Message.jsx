import React from 'react'
class Message extends React.VComponent{
    //msg ="Hello"....
    state = {
        msg:"Hello ,GM"
    }
    gmHandler = () => {
        this.setstate( {
            msg:'GM Rahul Ghandhi'
        })
    } 
        gnhandler=()=>{
            this.setstate({msg:"GN Rahul ji"})
        }
        render(){
            return <div>
                <h2>Message Component</h2>
                <h3>Message Value:{this.state.msg}</h3>
                <button onClick={this.gmHandler}>GM</button>
                <button onClick={this.gnhandler}>GN</button>
            </div>

}
}
export default Message