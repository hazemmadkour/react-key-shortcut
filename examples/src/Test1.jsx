import React from 'react';
import {useRegisterShortcut} from 'react-key-shortcut';

export default Test1 = () =>{
    useRegisterShortcut({shortcut:"ctrl+z",name:"zoom"},()=>{alert("test1")});
    return <div style={{display:"inline-block",width:300,height:300, border:"1px solid red"}}>press anyKey</div>
};