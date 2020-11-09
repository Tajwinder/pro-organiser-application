import React,{Component} from 'react'
import axios from 'axios'
import styles from './Home.module.css'
import BoardDetails from '../boardDetails/BoardDetails';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            boards:[],
            boardDetails:false,
            boardId:''
         }
    }

   returnHome=()=>{
this.setState({boardDetails:false})
  }
   
    render() { 
       
        return this.state.boardDetails?<BoardDetails boardId={this.state.boardId} hideDetails={this.returnHome}/>:( 
            <div className={styles.boards}>
                <div className="heading">Boards</div>
                {
                    this.state.boards.length===0?<div>You haven't created any boards. Kindly click on the 'Create Board' button in the navigation bar to create a board.
                     </div>:(
                        <ul className={styles.boardsList}>
                        { this.state.boards.map(
                            (obj)=>(
                                // console.log(obj)
                                <li key={obj.key} className={styles.board}
                                   onClick={()=>this.setState({boardDetails:true, boardId:obj.key})}>{obj.name}
                                    </li>
                            )
                        )
                            }
                        </ul>
                    )
                }
               
               
            </div>
            
         );
    }
    componentDidMount(){
        console.log("didMount")
        let myarr=[];
        let value;
        axios.get("https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards.json")
            .then(response=>{
                
                if(response.data){
                    Object.keys(response.data).map((key)=>{
                        value=response.data[key];
                        
                            value['key']=key;
                           
                            myarr.push(value)
                    })
                    this.setState({
                        boards:[...myarr]
                    })
                }
            })
           
    }

   
}
 
export default Home;