import React from 'react';
import Home from './components/home/Home';

import {HashRouter,Route, Switch} from 'react-router-dom';
// import './mystyle.css'
import Navbar from './components/Navbar/Navbar';
// import './index.css'
import CreateBoardForm from './components/createBoardForm/CreateBoardForm';
// import AddColumn from './components/addColumn/AddColumn';
// import BoardDetails from './components/boardDetails/BoardDetails';

export default function App(){
    return (
        <HashRouter>
         <div>
            <Navbar/>
               
            <Switch>
            <Route path='/' exact component={Home}/>
               
            <Route path='/createboard'  component={CreateBoardForm}/>
            {/* <Route path='/BoardDetails' component={BoardDetails}/> */}

            {/* <Route path='/' exact component={Home}/> */}
            {/* <Route path='/about' component={About}/> */}
            </Switch>
            
         </div>
     </HashRouter>
       
    )
}