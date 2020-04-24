import React from "react";
import { Modal, Button } from "semantic-ui-react";
import { Form, Field } from "react-final-form";
import { Textbox } from "./SemanticUIWrappers";

const CreateChannelModal = ({ isOpen, setIsOpen }) => {
  const onSubmit = async (values) => {
    console.log(values);
  };
  return (
    <Modal
      closeOnDimmerClick={false}
      size='tiny'
      closeIcon
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Modal.Header as='h1'>Create a channel</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          Channels are where your team communicates. They’re best when organized around a topic —
          #marketing, for example.
        </Modal.Description>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <Field name='name' text='Name' component={Textbox} />
              <Field name='description' text='Description' component={Textbox} />
            </form>
          )}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button color='green'>Create</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default CreateChannelModal;
