import {useEffect,useContext} from 'react';
import Mousetrap from 'mousetrap';
import ShortcutContext from '../ShortcutContext';

import {GUID} from '../../utils/utilities';

export const useRegisterShortcuts = (shortcuts = []) =>{

    if(shortcuts?.length){
        const [context, setContext] = useContext(ShortcutContext);
        shortcuts.forEach(item =>{
            const {shortcut,name} = item;
            if(shortcut&&name){
                if(Array.isArray(shortcut)){
                    shortcut.forEach(item=>{
                        registerShortcut(context,setContext,item,name);
                    });
                }
                else
                    registerShortcut(context,setContext,shortcut,name);
                    
                Mousetrap.bind(shortcut, ()=>{
                    setContext({...context, [name]:GUID()});
                });
            }
        });
    }
}

const registerShortcut = (context,setContext,shortcut,name) =>{
    const newContext = {...context};
    let contextChanged = false;
    if(!newContext[name] && newContext[name]!==''){
        newContext[name] = '';
        contextChanged = true;
    }

    if(!newContext.CONTROL_MAP)
        newContext.CONTROL_MAP = {};

    if(!newContext.CONTROL_MAP[shortcut]){
        newContext.CONTROL_MAP[shortcut] = name;
        contextChanged = true;
    }

    if(contextChanged)
        setContext(newContext);
};

export const useShortcut = (shortcut,callback) =>{
    if(shortcut){
        Mousetrap.bind(shortcut, callback);
    }
}

export const useTriggerShortcut = (shortcut) =>{
    const [context, setContext] = useContext(ShortcutContext);
    if(shortcut){
        const shortcutName = context.CONTROL_MAP[shortcut];
        if(shortcutName)
            setContext({...context, [shortcutName]:GUID()});
        else
            Mousetrap.trigger(shortcut);
    }
}

export const useShortcutCallback = (name,callback) =>{
    const [context] = useContext(ShortcutContext);
    useEffect(()=>{
        
        if(context[name] && callback)
            callback();
            
    },[context,name,callback]);
}