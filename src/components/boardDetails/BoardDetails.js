import React,{useState,useEffect } from 'react'
import Axios from 'axios'
import AddColumn from '../addColumn/AddColumn';

import styles from './BoardDetails.module.css'

import Columns from './../columns/Columns'
const BoardDetails=(props)=>{
    
    
    const [addColumn,showAddColumn]=useState(false);
    const [boardName,setBoardName]=useState('')
    
    
    const hideColumnHandler=()=>{
        
        showAddColumn(false);
    }

    
       
        useEffect(()=>{
             Axios.get(`https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards/${props.boardId}/.json`)
             .then(Response=>{
                
                 setBoardName(Response.data['name']);
               
               
             })
        
        return ()=>{

        }
    },[props.boardId])
        
        
        

        
        
         return (
         <>
         {addColumn &&  <AddColumn hideModel={hideColumnHandler} boardId={props.boardId}  />}
         <div className={styles.boardDetails}>
         <div className="heading" >{boardName}</div> 
   
        <Columns boardId={props.boardId}/>
        <button id={styles.addColumn} onClick={()=>showAddColumn(true)}>Add a Column</button>
        </div> 
         </>
         )
    
}
 
export default BoardDetails;
