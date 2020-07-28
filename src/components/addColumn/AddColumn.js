import React ,{Component} from 'react'
import axios from "axios";
// import { NavLink } from 'react-router-dom';

class AddColumn extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    addColumnHandler(){
      let  columnObj={
            name:this.state.columnName
        }
        axios.post(`https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards/${this.props.boardId}/columns.json`,columnObj)
        .then(()=>{
           
            this.props.hideModel();
        })
        // <NavLink to='./'></NavLink>
       
    }
    render() { 
        return (
            <div>
                <h3>Add Column</h3><br/>
                <div className='inputDiv'>
                   <label>Enter team name</label>
                   <input onChange={(e)=>{this.setState({
                       columnName:e.target.value
                   })}}></input>
                </div>
                <button onClick={()=>this.addColumnHandler()}>Add Column </button> 
 
            </div>
          );
    }
}
 
export default AddColumn;