"use client";
import React, { useState } from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
const [value, setValue] = useState("");

  const toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image'],
    ['clean']
  ];

  const formats = [
    'undo', 'redo',
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  const editorHeight = { height: '300px' };

  return (
    <ReactQuill modules={{ toolbar: toolbarOptions }} theme="snow" formats={formats} value={value} onChange={setValue} placeholder="Start Typing...." style={editorHeight} />
  );
};

export default TextEditor;