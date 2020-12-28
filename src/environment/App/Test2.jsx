import React from 'react';
import {useShortcutCallback, useShortcut} from 'react-key-shortcuts';

const Test2 = () => {
  useShortcutCallback('zoom', () => {
    alert('test2 is callbacked due to test1 zoom');
  });
  useShortcut('ctrl+c', () => {
    alert('Test2 is zooming');
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
