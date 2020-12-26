import React from 'react';
import {useShortcutCallback} from 'react-key-shortcut';

const Test2 = () =>{
    useShortcutCallback("zoom",()=>{alert("test2")});
    return <div style={{display:"inline-block",width:300,height:300, border:"1px solid green"}}></div>
};

export default Test2;