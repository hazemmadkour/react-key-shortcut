import React from 'react';
import {useShortcutCallback} from 'react-key-shortcuts';

const Test1 = () => {
  useShortcutCallback('zoom', () => {
    alert('test1 is zooming');
  });
  return (
    <div
      style={{
        display: 'inline-block',
        width: 300,
        height: 300,
        border: '1px solid red',
      }}>
      press anyKey
    </div>
  );
};

export default Test1;
