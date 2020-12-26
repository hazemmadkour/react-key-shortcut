import React from 'react';
import {useShortcutCallback, useRegisterShortcut} from './lib';

const Test2 = () =>{
    useShortcutCallback("zoom",()=>{alert("test2 is callbacked due to test1 zoom")});
    useRegisterShortcut({shortcut:"ctrl+c"},()=>{alert("Test2 is zooming")});
    return <div style={{display:"inline-block",width:300,height:300, border:"1px solid green"}}></div>
};

export default Test2;