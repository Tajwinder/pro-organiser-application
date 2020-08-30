import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import AddCardModel from '../addCardModel/AddCardModel';
import RenderCards from '../renderCards/RenderCards';
import styles from './Columns.module.css'
import { DragDropContext} from 'react-beautiful-dnd';

const Columns=(props)=>{

  
   
    const [columns,setAddNewColumn]=useState([])
    const [drag,setDrag]=useState(false);

    const [addCard,showAddCardModel]=useState(false)
    const [columnId,setColumnId]=useState('');

    const addCardHandler=(key)=>{
        setColumnId(key)
        showAddCardModel(true);
    }
    const hideAddCardHandler=()=>{
        console.log("hiding the model")
        showAddCardModel(false)
    }

   const handleDrag=()=>{
       setDrag(!drag)

    }


const onDragEnd=result=>{
    //to do
    // debugger;
    const { source, destination,draggableId } = result;

    // dropped outside the list
    if (!destination) {
        return;
    }

    if (source.droppableId === destination.droppableId 
       ) 
        {
       return;
    } 
    
    // let oldCol =source.droppableId;
    let newCol=destination.droppableId;
    let oldCol=source.droppableId;
    let dragId=draggableId;
    
    Axios.get(`https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards/${props.boardId}/columns/${oldCol}/cards/${dragId}.json`)
    .then(
        response=>{
            console.log("dragcard")
            let draggedCard=response.data;
            // console.log(draggedCard)
            Axios.delete(`https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards/${props.boardId}/columns/${oldCol}/cards/${dragId}.json`)
            .then(()=>{
                console.log("card deleted")
                Axios.post(`https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards/${props.boardId}/columns/${newCol}/cards.json`,draggedCard)
            .then(()=>{
                console.log("card added")
                handleDrag();
               
            })
            })
           
        }
    )
   
}

    useEffect(() => {
        let myarr=[];
        let value;
        
         
         Axios.get(`https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards/${props.boardId}/columns.json`)
         .then(response=>{
             
             if(response.data){
                 const keys = Object.keys(response.data);
                 // iterate over object
                 keys.forEach((key, index) => {
                     value=response.data[key];
                   
                     value['key']=key; 
                    
                     myarr.push(value)
                  
                
                 });
                
                 setAddNewColumn([...myarr])

             }
         })
         return () => {
             console.log("card dragged");
             setDrag(false)
         }
     }, [ props.boardId])

     return addCard?
     <>
     <AddCardModel boardId={props.boardId} columnId={columnId} hideModel={hideAddCardHandler} />
     <DragDropContext onDragEnd={(result)=>onDragEnd(result)}>
            

     <div >
         <ul style={{float:"left"}} className={styles.columnList}>
         {
             
            
             columns.map((obj,key)=>(
                 
                 <>
                
                 <li key={key} id={obj.key} className={styles.column} >

                     <div className={styles.columnName}>{obj.name}</div>
                     {/* <Droppable > */}
                    
                     <RenderCards boardId={props.boardId} columnName={obj.name} columnId={obj.key} drag={drag} handleDrag={handleDrag}/>
                   
                        
                    
                     <div className={styles.addCard} onClick={()=>addCardHandler(obj.key)}>Add a card</div>
                     {/* </Droppable> */}

                 </li>
                 
                 </> 
             ))
            
         }
         
         </ul>
     </div>
     </DragDropContext>
     </>
     :(
        <DragDropContext onDragEnd={(result)=>onDragEnd(result)}>
            

        <div >
            <ul style={{float:"left"}} className={styles.columnList}>
            {
                
               
                columns.map((obj,key)=>(
                    
                    <>
                   
                    <li key={key} id={obj.key} className={styles.column} >

                        <div className={styles.columnName}>{obj.name}</div>
                        {/* <Droppable > */}
                       
                        <RenderCards boardId={props.boardId} columnName={obj.name} columnId={obj.key} drag={drag} handleDrag={handleDrag}/>
                      
                           
                       
                        <div className={styles.addCard} onClick={()=>addCardHandler(obj.key)}>Add a card</div>
                        {/* </Droppable> */}

                    </li>
                    
                    </> 
                ))
               
            }
            
            </ul>
        </div>
        </DragDropContext>
    );

        }    

export default Columns;

