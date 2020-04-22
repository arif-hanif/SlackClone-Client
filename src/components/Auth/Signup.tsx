import React from "react";
import { Button, Input, Header } from "semantic-ui-react";
import { Form, Field } from "react-final-form";
import styled from "styled-components";
import * as yup from "yup";
import { setIn } from "final-form";

const Wrapper = styled.div`
  background: GhostWhite;
  height: 100vh;
`;

const FormLabel = styled.div`
  padding-bottom: 6px;
`;

const InputStyled = styled(Input)`
  padding-bottom: 15px;
`;

const CenteredContainer = styled.div`
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 999;
  height: 400px;
  width: 500px;
  margin: auto;
  padding: 20px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const ErrorStyle = styled.span`
  font-size: 12px;
  font-style: italic;
  color: red;
`;

export const SInput = ({ input, meta, ...rest }) => (
  <div>
    <FormLabel>
      <strong>
        {rest.text} {meta.error && meta.touched && <ErrorStyle>{meta.error}</ErrorStyle>}
      </strong>
    </FormLabel>
    <InputStyled error={meta.error && meta.touched} fluid {...input} {...rest} />
  </div>
);

const required = "- This field is required";

const validationSchema = yup.object({
  email: yup.string().email("- must be a valid email").required(required),
  displayName: yup.string().required(required),
  password: yup.string().min(4, "- must be longer than four characters").required(required),
});

const validate = async (values) => {
  try {
    await validationSchema.validate(values, { abortEarly: false });
  } catch (err) {
    const errors = err.inner.reduce((formError, innerError) => {
      return setIn(formError, innerError.path, innerError.message);
    }, {});

    return errors;
  }
};

const emailRequired = (value) => (value === yup.string().email() ? null : "error");
const Signup = () => {
  const onSubmit = (values) => console.log(values);

  return (
    <Wrapper>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <CenteredContainer>
              <Header textAlign='center' as='h2'>
                Signup for an account
              </Header>
              <Field name='displayName' text='DISPLAY NAME' component={SInput} />
              <Field name='email' text='EMAIL' component={SInput} />
              <Field name='password' type='password' text='PASSWORD' component={SInput} />
              <br />
              <Button type='submit' color='violet' fluid>
                CREATE ACCOUNT
              </Button>
            </CenteredContainer>
          </form>
        )}
      />
    </Wrapper>
  );
};

export default Signup;
