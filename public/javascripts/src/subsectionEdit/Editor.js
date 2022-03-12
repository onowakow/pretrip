import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

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

const ComponentEditor = ({ component }) => {
  const [componentInputTitle, setComponentInputTitle] = useState(
    component.title
  );
  const [componentAttributeArray, setComponentAttributeArray] = useState(
    component.attributes
  );

  const handleComponentAttributeArrayEdit = (event, index) => {
    const newAttributeValue = event.target.value;
    let attributesCopy = componentAttributeArray.slice();
    attributesCopy[index] = newAttributeValue;
    setComponentAttributeArray(attributesCopy);
  };

  const addBlankAttribute = () => {
    let attributeCopy = componentAttributeArray.slice();
    attributeCopy.push('');
    setComponentAttributeArray(attributeCopy);
  };

  return (
    <Form>
      <Form.Group controlId="componentTitle">
        <Form.Label>Component title</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setComponentInputTitle(e.target.value)}
          value={componentInputTitle}
        />
      </Form.Group>
      {componentAttributeArray.map((attribute, i) => {
        return (
          <Form.Group
            key={`componentAttribute-${i}`}
            controlId={`componentAttribute-${i}`}
          >
            <Form.Label>Attribute</Form.Label>
            <Form.Control
              onChange={(e) => handleComponentAttributeArrayEdit(e, i)}
              type="text"
              value={attribute}
            />
          </Form.Group>
        );
      })}
      <Button onClick={addBlankAttribute}>Add attribute</Button>
    </Form>
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

  return (
    <>
      <h1 className="capitalize">{sectionTitle}</h1>
      <h2 className="capitalize">{subsection.title}</h2>
      {openComponentId === undefined ? (
        <ComponentList
          components={components}
          goToPage={goToComponentEditPage}
        />
      ) : (
        <ComponentEditor component={getComponentDataFromId(openComponentId)} />
      )}
    </>
  );
};

export default Editor;
