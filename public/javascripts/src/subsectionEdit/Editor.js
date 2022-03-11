import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const ComponentList = ({ components, handleClick }) => {
  return (
    <>
      {components.map((component) => (
        <Row key={component._id} className="editor-componentTitleRow">
          <Button
            onClick={() => handleClick(component._id)}
            className="editor-componentTitle btn-light"
          >
            {component.title}
          </Button>
        </Row>
      ))}
    </>
  );
};

const ComponentEditor = ({}) => {
  return <h1>Component editor</h1>;
};

const Editor = ({ data }) => {
  const [openComponentId, setOpenComponentId] = useState(undefined);
  const { subsection, sectionKebabTitle, sectionTitle } = data;
  const components = subsection.components;

  const handleComponentClick = (componentId) => {
    setOpenComponentId(componentId);
  };

  return (
    <>
      <h1 className="capitalize">{sectionTitle}</h1>
      <h2 className="capitalize">{subsection.title}</h2>
      {openComponentId === undefined ? (
        <ComponentList
          components={components}
          handleClick={handleComponentClick}
        />
      ) : (
        <ComponentEditor />
      )}
    </>
  );
};

export default Editor;
