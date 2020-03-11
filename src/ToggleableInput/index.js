import React, { useState, useContext, useEffect } from "react";
import { EventContext } from "direflow-component";
function ToggleableInput (props) {
    const [editMode, setEditMode] = useState(props.editable ? props['default-edit-mode'] : false);
    const [value, setValue] = useState(props.value);
    const dispatch = useContext(EventContext);
    const [prevValue, setPrevValue] = useState(props.value);
    
    const handleChange = (inputEvent) => {
        const event = new Event('input-change');
        event.value = inputEvent.target.value;
        setValue(inputEvent.target.value)
        dispatch(event);
      };
    let inputRef = React.createRef();
    
    useEffect(() => {
        if(editMode){
            inputRef.current.focus();
        }
        if(props.value !== prevValue){
            setPrevValue(props.value);
            setValue(props.value)
        }
    }, [editMode, props.value, prevValue, inputRef]);
   
        return (
            <div>
                <link rel="stylesheet" href={props.css}></link>
                <input 
                    onBlur={()=>{setEditMode(props.editable ? false : true)}}
                    onChange={handleChange}
                    value={value}
                    type={props.type}
                    ref={inputRef}
                    className={props['input-class']}
                    style={{
                        display: editMode ? 'block' : 'none'
                    }}
                />
                <div 
                    onClick={()=>{setEditMode(props.editable ? true : false)}}
                    onFocus={()=>{setEditMode(props.editable ? true : false)}}
                    className={props['div-class']}
                    tabIndex={props.editable ? 0 : -1}
                    style={{
                        display: editMode ? 'none' : 'block'
                    }}
                >{value}</div>
            </div>
        )
}

export default ToggleableInput