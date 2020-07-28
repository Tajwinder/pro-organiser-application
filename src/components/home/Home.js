import React,{Component} from 'react'
import axios from 'axios'
// import {NavLink} from 'react-router-dom' 
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

  
    // addColumnHandler(){
    //    let data={
    //        boards:{
    //            b1:{
    //                name:"design board",
    //                columns:{
    //                    c1:{
    //                        name:"topic confusion",
    //                        cards:{
    //                            card1:{
    //                             name:"design",
    //                             members:["aman","arun","neha"]
    //                            }

    //                        }

    //                    }
    //                }
    //            }
    //        }
            

    //     }
    //     let newBoard={
    //         name:"agile board"
    //     }
        // axios.post("https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards/.json",newBoard)
        // .then(()=>{
            
        // })
       
        
    // }
    render() { 
        // console.log("render")
        return this.state.boardDetails?<BoardDetails boardId={this.state.boardId}></BoardDetails>:( 
            <div>
                <h3 className={styles.test}>Boards</h3>
                <ul className={styles.boardsList}>
                { this.state.boards.map(
                    (obj)=>(
                        // console.log(obj)
                        <li className={styles.board}><button onClick={()=>this.setState({boardDetails:true, boardId:obj.key})}>{obj.name}</button></li>
                    )
                )
                    }
                </ul>
               
                {/* <button onClick={()=>this.addColumnHandler()}>add column</button> */}
            </div>
            
         );
    }
    componentDidMount(){
        let myarr=[];
        let value;
        axios.get("https://pro-organizer-974c5.firebaseio.com/database/-MD5-Op_Wfw6sEJgo8Yr/boards.json")
            .then(response=>{
                 console.log("compmont")
                console.log(response.data)
                if(response.data){
                    const keys = Object.keys(response.data);
                    // iterate over object
                    keys.forEach((key, index) => {
                        value=response.data[key];
                        value['key']=key;
                       
                        myarr.push(value)
                   
                    });
                    this.setState({
                        boards:[...myarr]
                    })
                }
            })
           
    }
}
 
export default Home;