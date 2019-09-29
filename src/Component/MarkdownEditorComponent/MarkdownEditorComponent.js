import React from "react";

const MarkdownEditorComponent = props => {
  return (
    <div className="markdown-container">
      <div className="header">
        <label>Markdown Editor</label>
      </div>
      <div className="markdown-area-container">
        <textarea
          className="markdown-area"
          onChange={props.change}
          value={props.input}
        />
      </div>
    </div>
  );
};

export default MarkdownEditorComponent;
