import React from 'react';
import {useRegisterShortcut} from './lib';

const Test1 = () =>{
    useRegisterShortcut({shortcut:["ctrl+z","ctrl+d"],name:"zoom",isPublic:true},()=>{alert("test1 is zooming")});
    return <div style={{display:"inline-block",width:300,height:300, border:"1px solid red"}}>press anyKey</div>
};

export default Test1;