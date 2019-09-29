import React from "react";
import ReactHtmlParser from "react-html-parser";
import marked from "marked";
let showdown = require("showdown");
let output = null;

const getData = markdown => {
  marked.setOptions({
    renderer: new marked.Renderer(),
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  });

  let enabledOptions = {
    tables: true,
    simpleLineBreaks: true,
    openLinksInNewWindow: true,
    emoji: true,
    smartLists: true,
    lists: true,
    disableForced4SpacesIndentedSublists: true
  };
  var converter = new showdown.Converter(enabledOptions);
  converter.setFlavor("github");
  output = converter.makeHtml(markdown);
  //console.log(output);
  console.log(marked(markdown));
  output =
    `<style>
    h1{border-bottom : 2px outset #bbb;}
    h2{border-bottom : 2px outset #bbb;}
    code{background-color: #fff; color: #191d1f; border-radius: 5px; width: 100%;}
    pre > code{ display: block; }
    blockquote{
        border-left: 4px outset #191d1f;
        background-color: #fff;
        color: #191d1f;
        box-shadow: 2px 2px 2px 0.1px #fff;
        padding-left: 10px;
    }
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }
      td, th {
        border: 1px solid #ccc;
        text-align: left;
        padding: 8px;
      }\
      th { background-color : #fff;
      color: #191d1f; }
      tr:nth-child(even) {
        background-color: #fff;
        color: #191d1f;
      }</style>` + output;
};

const MarkdownPreviewerComponent = props => {
  getData(props.data);
  return (
    <div className="previewer-container">
      <div className="header">
        <label>Markdown Previewer</label>
      </div>
      <div className="previewer-area-contaienr">
        <div className="preview-area">{ReactHtmlParser(output)}</div>
      </div>
    </div>
  );
};

export default MarkdownPreviewerComponent;
