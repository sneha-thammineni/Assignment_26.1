import React, {Component} from 'react';


class ListType extends Component{
    render (){
    // Using map method to extract the results array. 
    return <ul>
         {this.props.results.map((result, index)=><li key = {index}> {result}</li>)}   
    </ul>
    
    }
    
    }

    export default ListType;