import {useEffect,useContext} from 'react';
import ShortcutContext from '../ShortcutContext';
import Mousetrap from 'mousetrap';

import {GUID} from '../../utils/utilities';


export const useRegisterShortcut = ({shortcut,name,isPublic},callback) =>{
    const [context, setContext] = useContext(ShortcutContext);
    if(shortcut){
        if(isPublic && name && !context[name] && context[name]!=='')
            setContext({...context, [name]:''});

        Mousetrap.bind(shortcut, ()=>{

            if(isPublic)
                setContext({...context, [name]:GUID()});
            if(callback)
                callback();

        });
    }
}

export const useTrigerShortcut = (shortcut) =>{
    const [context, setContext] = useContext(ShortcutContext);
    if(shortcut){
        if(context[shortcut]){
            setContext({...context, [shortcut]:GUID()});
        }

        Mousetrap.trigger(shortcut);
    }
}

export const useShortcutCallback = (name,callback) =>{
    const [context] = useContext(ShortcutContext);
    useEffect(()=>{
        
        if(context[name] && callback)
            callback();
            
    },[context[name]]);
}