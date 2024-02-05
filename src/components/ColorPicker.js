import React from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = ({ onChange }) => {
  return (
    <div>
      <label>Background Color:</label>
      <ChromePicker color="#ffffff" onChange={(color) => onChange(color)} />
    </div>
  );
};

export default ColorPicker;

