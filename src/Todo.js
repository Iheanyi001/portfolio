import React from 'react'

function Todo(props){
    
        return(
           
            <div className="container" style={props.styles}>
                <input type="checkbox" 
                checked={props.source.status}
                onChange={(event)=>props.handleChange(props.source.id)}/>
                <span style={{fontSize:10, fontWeight:700}}>
                    {props.source.option}
                </span>
            </div>
            
        )
}
export default Todo