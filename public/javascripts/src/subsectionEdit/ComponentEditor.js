import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const ComponentEditor = ({ component, homeUrl }) => {
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

  const addBlankAttribute = (index) => {
    const attributeCopy = componentAttributeArray.slice();
    const length = attributeCopy.length;
    let newArr = attributeCopy.slice(0, index + 1);
    newArr.push('');
    newArr.push(...attributeCopy.slice(index + 1, length));
    setComponentAttributeArray(newArr);
  };

  const deleteAttribute = (index) => {
    const attributeCopy = componentAttributeArray.slice();
    const length = attributeCopy.length;
    let newArr = attributeCopy.slice(0, index);
    newArr.push(...attributeCopy.slice(index + 1, length));
    setComponentAttributeArray(newArr);
  };

  return (
    <Form>
      <h2 style={{ fontWeight: 'normal' }}>Editing component: </h2>
      <h2 className="capitalize">
        <em>{component.title}</em>
      </h2>
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
        <Form.Text>
          Remember to save all changes using the save button below.
        </Form.Text>
        {componentAttributeArray.map((attribute, i) => {
          return (
            <React.Fragment key={`componentAttribute-${i}`}>
              <Form.Group
                className="editor-attributeInputGroup"
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
                  onClick={() => deleteAttribute(i)}
                >
                  Remove attribute
                </Button>
                <Button
                  className="editor-btn"
                  onClick={() => addBlankAttribute(i)}
                >
                  Add attribute
                </Button>
              </div>
              <hr />
            </React.Fragment>
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
        <Link to={homeUrl}>
          <Button className="editor-btn btn-warning">Cancel edit</Button>
        </Link>
      </div>
    </Form>
  );
};

export default ComponentEditor;
