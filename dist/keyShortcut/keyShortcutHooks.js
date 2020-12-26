import React, { useEffect, useContext } from 'react';
import Mousetrap from 'mousetrap';
import ShortcutContext from 'ShortcutContext';
import { GUID } from '../../utils/utilities'; //const Mousetrap = require("mousetrap");
//Mousetrap.bind("ctrl+d", yourEventHandler);

const [context, setContext] = useContext(ShortcutContext);
export const useRegisterShortcut = ({
  shortcut,
  name
}, callback) => {
  if (shortcut) {
    const key = name ? name : shortcut;
    setContext({ ...context,
      key: ''
    });
    Mousetrap.bind(shortcut, () => {
      setContext({ ...context,
        key: GUID()
      });
      if (callback) callback();
    });
  }
};
export const useShortcutCallback = (nameOrShortcut, callback) => {
  useEffect(() => {
    if (context[nameOrShortcut] && callback) callback();
  }, [context[nameOrShortcut]]);
};