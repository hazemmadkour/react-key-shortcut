import React, { useState } from 'react';
import ShortcutContext from '../ShortcutContext';

const KeyShortcutProvider = ({
  children
}) => {
  const [context, setContext] = useState({});
  return /*#__PURE__*/React.createElement(ShortcutContext.Provider, {
    value: [context, setContext]
  }, children);
};

export default KeyShortcutProvider;