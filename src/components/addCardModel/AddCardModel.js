import React,{useState,useEffect} from 'react';
import Axios from 'axios';

const AddCardModel=(props)=>{

    const [boardMembers,setBoardMembers]=useState([])
    // const [addCard,setAddCard]=useState(false)

    //cardInput
    const [cardTitle,setCardTitle]=useState('');
    const [cardMembers,setCardMembers]=useState('');
    const [cardDesc,setCardDesc]=useState('');
    const [cardDueDate,setCardDueDate]=useState('')

    const addCardHandler=()=>{
        const cardObj={
            title:cardTitle,
            members:cardMembers,
            desc:cardDesc,
            dueDate:cardDueDate
         }
       Axios.post(`https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards/${props.boardId}/columns/${props.columnId}/cards.json`,cardObj)
       .then(()=>{
          
           props.hideModel();
       })
    }

    useEffect(() => {
        Axios.get(`https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards/${props.boardId}.json`)
        .then(response=>{
// console.log(response.data)
         let members=response.data['members']
         setBoardMembers([...members])
        })
        return () => {
            
        }
    }, [props.boardId])

    
    return(
        
             <div className='form'>
                <h3 id='formHeading'>Add Card</h3>
                <label>Enter a title for your task</label><br/>
                <input id='title' placeholder='e.g. Agile Sprint Board' onChange={(e)=>setCardTitle(e.target.value)}></input><br/><br/>
                <label>Add your team members</label><br/>
                {/* <input id='team' placeholder='Add your team(separated by commas)'onChange={(e)=>this.setState({members:e.target.value.split(',')})} ></input><br/><br/> */}
                <select name="cars" id="cars" multiple>
                   {
                       boardMembers.map(
                        (obj)=>(
                            <option >{obj}</option>
                       )

                    

                    )
                   } 
                   
                   
                </select>
                <label>Enter description for your task</label><br/>
                <input id='type' placeholder='e.g. Design Board' onChange={(e)=>setCardDesc(e.target.value)}></input><br/><br/>
                <label>Select due date for your task</label><br/>
                <input id='type' placeholder='e.g. Design Board' type='date' onChange={(e)=>setCardDueDate(e.target.value)}></input><br/><br/>

                <button id='Createcard' onClick={()=>addCardHandler()}>Add card</button>
            </div>
        

    )
}

export default AddCardModel;