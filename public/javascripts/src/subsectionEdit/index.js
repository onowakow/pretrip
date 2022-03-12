import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './Editor';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = document.getElementById('subsectionEditor');

const renderReactEditor = () => {
  const data = JSON.parse(root.getAttribute('data-react'));
  ReactDOM.render(<Editor data={data} />, root);
};

if (root) {
  renderReactEditor();
}

// if (root) renderReactEditor();
