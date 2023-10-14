
import {Component} from "react"

class C1 extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {count:0};
    }
    handleChange = (event) =>{
      this.setState({
          count: event.split(/\s+/).filter(Boolean).length
      })
  }
    render(){
      return(   <form class="formstyle">
      <h1 style={{fontSize:35}}>Responsive paragraph word counter</h1>
      <textarea onChange={this.handleChange}></textarea>
      <h3 style={{color:'gray', fontWeight:'normal', textAlign:'left'}}>Word Count: {this.state.count} </h3>
      </form>
   
    )
    }
  }
      
   

export default C1;