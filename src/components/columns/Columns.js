import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import AddCardModel from '../addCardModel/AddCardModel';
import RenderCards from '../renderCards/RenderCards';

const Columns=(props)=>{

  
   
    const [columns,setAddNewColumn]=useState([])

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

    useEffect(() => {
        let myarr=[];
        
        let value;
         console.log("newColumn")
         Axios.get(`https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards/${props.boardId}/columns.json`)
         .then(response=>{
             console.log("from Columns.js")
             console.log(response.data)
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
             console.log("returned from addNewColumn");
         }
     }, [ props.boardId])

     return addCard?<AddCardModel boardId={props.boardId} columnId={columnId} hideModel={hideAddCardHandler}/>:(
        <div>
            <ul >
            {
                
                
                columns.map((obj)=>(
                    <>
                    <li>
                        {obj.name}<br/><br/>
                        <RenderCards boardId={props.boardId} columnId={obj.key} />
                        {/* {(obj['cards']===undefined)?null:(
                            <ul className="inner-ul">
                                {
                                   Object.values(obj['cards']).map((newObj)=>(
                                       <li>{newObj.title}</li>

                                   )
                                   )
                                }
                              
                            </ul>
                        )
                        
                        
                    } */}
                           
                       
                        <button className='addCard' onClick={()=>addCardHandler(obj.key)}>Add a card</button>

                    </li>
                    
                    </> 
                ))

            }
            </ul>
        </div>
    );

        }    

export default Columns;