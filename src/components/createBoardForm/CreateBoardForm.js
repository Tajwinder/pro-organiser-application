import React,{Component} from 'react'
import './CreateBoardform.css'
import axios from 'axios';
class CreateBoardForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            members:[],
            type:''
         }
    }
    createBoardHandler(){
        let boardObj={
            name:this.state.boardName,
            members:this.state.members,
            type:this.setState.type

        }
        axios.post("https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards/.json",boardObj)
        .then(()=>{
            alert("board created");
        })
       
    }
    
    render() { 
        return ( 
            <div className='form'>
                <h3 id='formHeading'>Create a Board</h3>
                <label>Enter a name for your board</label><br/>
                <input id='name' placeholder='e.g. Agile Sprint Board' onChange={(e)=>{
                    this.setState({boardName:e.target.value})
                }}></input><br/><br/>
                <label>Add your team members</label><br/>
                <input id='team' placeholder='Add your team(separated by commas)'onChange={(e)=>this.setState({members:e.target.value.split(',')})} ></input><br/><br/>
                <label>Enter the type of your board</label><br/>
                <input id='type' placeholder='e.g. Design Board' onChange={(e)=>this.setState({type:e.target.value})}></input><br/><br/>

                <button id='CreateBoard' onClick={()=>this.createBoardHandler()}>create</button>
            </div>
          );
    }
}
 
export default CreateBoardForm ;