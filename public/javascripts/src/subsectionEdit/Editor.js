import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ComponentEditor from './ComponentEditor';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const ComponentList = ({ subsectionTitle, components, basePath }) => {
  // We need the origin to include all parts of URL, up to and including 'Edit'

  return (
    <>
      <h2 style={{ fontWeight: 'normal' }}>Editing subsection: </h2>
      <h2 className="capitalize">
        <em>{subsectionTitle}</em>
      </h2>
      <hr />
      {components.map((component) => (
        <nav key={component._id}>
          <Row className="editor-componentTitleRow">
            <div className="editor-componentSelect">
              <h3 className="capitalize">{component.title}</h3>
              <Link to={`${basePath}/${component._id}`}>
                <Button className="btn-primary">edit component</Button>
              </Link>
            </div>
          </Row>
        </nav>
      ))}
    </>
  );
};

// Editor() is the main component
const Editor = ({ data }) => {
  const { subsection, sectionKebabTitle, sectionTitle } = data;
  const components = subsection.components;

  const origin = window.location.origin;
  const path = window.location.pathname;
  const basePath = path.split('/').slice(0, 5).join('/');
  const baseUrl = origin + basePath;

  return (
    <Router>
      <Routes>
        {components.map((component) => (
          <Route
            key={component._id}
            path={`${basePath}/${component._id}`}
            element={
              <ComponentEditor component={component} homeUrl={basePath} />
            }
          />
        ))}
        <Route
          path={basePath}
          element={
            <ComponentList
              basePath={basePath}
              subsectionTitle={subsection.title}
              components={components}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default Editor;
