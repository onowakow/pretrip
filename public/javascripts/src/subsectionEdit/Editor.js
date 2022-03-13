import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ComponentEditor from './ComponentEditor';

const ComponentList = ({ subsectionTitle, components, goToPage }) => {
  return (
    <>
      <h2 style={{ fontWeight: 'normal' }}>Editing subsection: </h2>
      <h2 className="capitalize">
        <em>{subsectionTitle}</em>
      </h2>
      <hr />
      {components.map((component) => (
        <Row key={component._id} className="editor-componentTitleRow">
          <div className="editor-componentSelect">
            <h3 className="capitalize">{component.title}</h3>
            <Button
              onClick={() => goToPage(component._id)}
              className="btn-primary"
            >
              edit component
            </Button>
          </div>
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
      {openComponentId === undefined ? (
        <ComponentList
          subsectionTitle={subsection.title}
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
