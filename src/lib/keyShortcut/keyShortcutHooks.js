import React, {useEffect,useContext} from 'react';
import Mousetrap from 'mousetrap';
import ShortcutContext from 'ShortcutContext';

import {GUID} from '../../utils/utilities';

//const Mousetrap = require("mousetrap");
//Mousetrap.bind("ctrl+d", yourEventHandler);

const [context, setContext] = useContext(ShortcutContext);

export const useRegisterShortcut = ({shortcut,isPublic},callback) =>{
    if(shortcut){
        if(isPublic)
            setContext({...context, [shortcut]:''});

        Mousetrap.bind(shortcut, ()=>{

            if(isPublic)
                setContext({...context, [shortcut]:GUID()});
            if(callback)
                callback();

        });
    }
}

export const useTrigerShortcut = (shortcut) =>{
    if(shortcut){
        if(context[shortcut]){
            setContext({...context, [shortcut]:GUID()});
        }

        Mousetrap.trigger(shortcut);
    }
}

export const useShortcutCallback = (shortcut,callback) =>{
    useEffect(()=>{
        
        if(context[shortcut] && callback)
            callback();
            
    },[context[shortcut]]);
}