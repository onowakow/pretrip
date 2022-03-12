import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ComponentEditor from './ComponentEditor';

const ComponentList = ({ components, goToPage }) => {
  return (
    <>
      {components.map((component) => (
        <Row key={component._id} className="editor-componentTitleRow">
          <Button
            onClick={() => goToPage(component._id)}
            className="editor-componentTitle btn-light"
          >
            {component.title}
          </Button>
        </Row>
      ))}
    </>
  );
};

const Editor = ({ data }) => {
  const [openComponentId, setOpenComponentId] = useState(undefined);
  const { subsection, sectionKebabTitle, sectionTitle } = data;
  const components = subsection.components;

  const goToComponentEditPage = (componentId) => {
    setOpenComponentId(componentId);
  };

  const getComponentDataFromId = (componentId) => {
    const component = components.find(
      (component) => component._id === componentId
    );
    return component;
  };

  const handleCancelEdit = () => {
    setOpenComponentId(undefined);
  };

  return (
    <>
      <h2 className="capitalize">Section: {sectionTitle}</h2>
      <h2 className="capitalize">Subsection: {subsection.title}</h2>
      {openComponentId === undefined ? (
        <ComponentList
          components={components}
          goToPage={goToComponentEditPage}
        />
      ) : (
        <ComponentEditor
          handleCancelEdit={handleCancelEdit}
          component={getComponentDataFromId(openComponentId)}
        />
      )}
    </>
  );
};

export default Editor;
