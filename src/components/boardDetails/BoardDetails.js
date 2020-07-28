// class BoardDetails extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
import React,{useState } from 'react'
import AddColumn from '../addColumn/AddColumn';

import  './BoardDetails.css'

import Columns from './../columns/Columns'
const BoardDetails=(props)=>{
    const hideColumnHandler=()=>{
        showAddColumn(false);
    }
    
    const [addColumn,showAddColumn]=useState(false);
    
   
   

    
       
    //     useEffect(()=>{
    //          Axios.get(`https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards/${props.boardId}/columns.json`)
    //          .then(Response=>{
    //             //  console.log(Response.data);
    //             // if(Response.data!==null){
    //             //     console.log("no")
    //             //     setHaveColumns(true);

    //             // }
    //             //  console.log(keys.length)
    //             // if(keys.length>0){
    //             //     console.log("yes")
    //             // }
    //             // if(typeof(keys)==null){
    //             //         console.log("yes")
    //             //     }
    //             //     else{
    //             //         console.log("no")
    //             //     }
               
    //          })
        
    //     return ()=>{

    //     }
    // },[])
        
        
        // if(addCard===true){
        //     return <AddCardModel boardId={props.boardId} columnId={columnId} hideModel={hideAddCardModelHandler} newCardHandler={newCardHandler}/ >
        // }

        
        
         return addColumn?<AddColumn hideModel={hideColumnHandler} boardId={props.boardId} />:(
             <>
         <Columns boardId={props.boardId}/>
         <button id='addColumn' onClick={()=>showAddColumn(true)}>add column</button>
         </>
         )
        
    
}
 
export default BoardDetails;