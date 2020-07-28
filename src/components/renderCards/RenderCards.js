import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import styles from './RenderCards.module.css'

const RenderCards=(props)=>{

  
   
    const [cards,addCards]=useState([])

  

    

    useEffect(() => {
        let myarr=[];
        
        let value;
       
         Axios.get(`https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards/${props.boardId}/columns/${props.columnId}/cards.json`)
         .then(response=>{
             console.log("from Cards.js")
             console.log(response.data)
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
         }
     }, [ props.boardId,props.columnId])

     return (
        <div>
            <ul >
            {
                
                
                cards.map((obj)=>(
                    <>
                    <li className={styles.card}>
                        {obj.title}<br/><br/>
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
                           
                       
                      

                    </li>
                    
                    </> 
                ))

            }
            </ul>
        </div>
    );

        }    

export default RenderCards;