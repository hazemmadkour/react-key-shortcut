import React, {useState} from 'react';
import ShortcutContext from '../ShortcutContext';

const KeyShortcutProvider = ({children}) =>{
    const [context,setContext] = useState({});
    return <ShortcutContext.Provider value={[context,setContext]}>{children}</ShortcutContext.Provider>;
};

export default KeyShortcutProvider;