import React, {Component} from 'react';


// Import all the sub components to App.js

import List from './List.js'
import ListType from './ListType.js'
import Title from './Title.js';
import User from './User.js';



// Creating App as the main component //

class App extends Component {
    render(){
        return <div>
                {<Title/>}
                {<User/>}
                {<List sections ={'Skills'}/>}
                {/* {<List sections ={['This is  data 1',['This is data 2']]}/>} */}
                {<ListType results = {['sleeping',['writing codes']]}/>}
                
                
                 </div>
    }
}
 
export default App;