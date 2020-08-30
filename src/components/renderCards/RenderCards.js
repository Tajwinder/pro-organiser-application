import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import styles from './RenderCards.module.css'
import {Droppable, Draggable} from 'react-beautiful-dnd';
import CardDetails from './../cardDetails/CardDetails'
const RenderCards=(props)=>{

  
   
    const [cards,addCards]=useState([])
    // const [dragCard,setDragCard]=useState(props.drag)
    const [showCardDetails,setShowCardDetails]=useState(false);
    const [cardId,setCardId]=useState('')
    const handleCardDetails=(key)=>{
      setCardId(key);
      setShowCardDetails(true);
    }
   const hideCardDetailsHandler=()=>{
       setShowCardDetails(false)
   }

    
    useEffect(() => {
        let myarr=[];
        
        let value;
       
         Axios.get(`https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards/${props.boardId}/columns/${props.columnId}/cards.json`)
         .then(response=>{
           
             if(response.data){
                 const keys = Object.keys(response.data);
                 // iterate over object
                 keys.forEach((key, index) => {
                     value=response.data[key];
                   
                     value['key']=key; 
                    
                     myarr.push(value)
                
                 });
                
                 addCards([...myarr])

             }
         })
         return () => {
             console.log("returned from cards");
             if(props.drag===true){
                 props.handleDrag();
             }
         }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [ props.boardId, props.columnId, props.drag])

     return (
       <>
         <CardDetails columnName={props.columnName} boardId={props.boardId} columnId={props.columnId} cardId={cardId} showCardDetails={showCardDetails} hideModel={hideCardDetailsHandler} />
         <Droppable droppableId={props.columnId}>
             {provided=>(
             <div  
             ref={provided.innerRef}
             {...provided.droppableProps}
             >
             <ul className={styles.cardsList} 
              
             >
             {
          
                 cards.length?( 
                 cards.map((obj,index)=>(
                     < >
                     <Draggable key={index} draggableId={obj.key} index={index}>
                        {provided=>(
                         <li key={index} id={styles.card} className={styles.card} onClick={()=>handleCardDetails(obj.key)}   
                         ref={provided.innerRef} 
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}
                        
                         >
                            
                           <div className={styles.cardName}> {obj.title}</div> 
                            
                             
                                  <ul className={styles.cardMembers}>
                                     {
                                         obj.members?(
                                        
                                        obj['members'].map((newObj)=>(
                                            <li key={index} className={styles.cardMember}>{newObj.substring(0,2)}</li>
     
                                        )
                                        )
                                         ):null
                                     }
                                   
                                 </ul> 
                             
                             
                             
                         
                                
                            
                           
     
                         </li>

                         ) } 
                    
                     </Draggable>
                     </> 
                 ))
                 ):<div>No tasks added</div>
 
             }
            
             </ul>
             {provided.placeholder}
         </div>
      ) }
        
        </Droppable>
        </>
    );

        }    

export default RenderCards;

