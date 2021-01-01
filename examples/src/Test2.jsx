import React from 'react';
import {useShortcutCallback} from 'react-key-shortcuts';

const Test2 = () => {
  useShortcutCallback('zoom', () => {
    console.log('test2 is zooming');
  });
  useShortcutCallback('open', () => {
    console.log('Test2 is opening');
  });
  return (
    <div
      style={{
        display: 'inline-block',
        width: 300,
        height: 300,
        border: '1px solid green',
      }}
    />
  );
};

export default Test2;
