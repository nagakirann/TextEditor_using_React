import React, { useState } from 'react';
import ColorPicker from '../ColorPicker';
import './TextEditor.css';

const TextEditor = () => {
  const [fontSize, setFontSize] = useState(18);
  const [fontFamily, setFontFamily] = useState('Arial');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [text, setText] = useState('');

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const handleFontChange = (e) => {
    setFontFamily(e.target.value);
  };

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color.hex);
  };

  const handleAddTextClick = () => {
    setText((prevText) => prevText + ' Hello, ');
  };

  return (
    <>
    <h1>Celebrare TextEditor Assignment</h1>
    <div className="text-editor-container">
      <div className="options-container">
        <div className="mb-3">
          <label className="form-label">Font Size:</label>
          <input type="number" className="form-control" value={fontSize} onChange={handleFontSizeChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Font Family:</label>
          <select className="form-select" value={fontFamily} onChange={handleFontChange}>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Helvetica">Helvetica</option>
          </select>
        </div>

        <ColorPicker onChange={handleBackgroundColorChange} />
      </div>

      <div className="textarea-container">
        <textarea
          className="form-control"
          style={{
            fontSize: `${fontSize}px`,
            fontFamily: `${fontFamily}, sans-serif`,
            backgroundColor: backgroundColor,
          }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing..."
        />
      </div>

      <div className="add-text-button">
        <button className="btn btn-primary" onClick={handleAddTextClick}>
          Add Text
        </button>
      </div>
    </div>
    </>
  );
};

export default TextEditor;
