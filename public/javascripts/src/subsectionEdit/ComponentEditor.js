import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';

const ComponentEditor = ({ component, handleCancelEdit }) => {
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
      <h2 className="capitalize">Component: {componentInputTitle}</h2>
      <hr />
      <Form.Group
        controlId="componentTitle"
        className="editor-componentEditorGroup"
      >
        <Form.Label>Component title</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setComponentInputTitle(e.target.value)}
          value={componentInputTitle}
        />
      </Form.Group>
      <div className="editor-componentEditorGroup">
        {componentAttributeArray.map((attribute, i) => {
          return (
            <>
              <Form.Group
                className="editor-attributeInputGroup"
                key={`componentAttribute-${i}`}
                controlId={`componentAttribute-${i}`}
              >
                <Form.Label>Attribute</Form.Label>
                <Form.Control
                  onChange={(e) => handleComponentAttributeArrayEdit(e, i)}
                  type="text"
                  value={attribute}
                  placeholder="Attribute text"
                />
              </Form.Group>
              <div className="editor-btnGroup">
                <Button
                  style={{ marginRight: '.5rem' }}
                  className="btn-danger editor-btn"
                >
                  Delete attribute
                </Button>
                <Button className="editor-btn" onClick={addBlankAttribute}>
                  Add attribute
                </Button>
              </div>
            </>
          );
        })}
      </div>
      <hr />
      <div className="editor-btnGroup">
        <Button
          type="submit"
          style={{ marginRight: '.5rem' }}
          className="editor-btn btn-success"
        >
          Save changes
        </Button>
        <Button onClick={handleCancelEdit} className="editor-btn btn-warning">
          Cancel edit
        </Button>
      </div>
    </Form>
  );
};

export default ComponentEditor;
