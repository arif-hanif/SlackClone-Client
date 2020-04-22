import React from "react";
import { Button, Header } from "semantic-ui-react";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import { setIn } from "final-form";
import { useMutation } from "@apollo/react-hooks";
import CenteredContainer from "./style/CenteredContainer";
import { SInput } from "../Form/SemanticUIWrappers";
import { SIGNUP_GQL, LOGIN_GQL } from "./AuthGQL";
import Wrapper from "../../style/Wrapper";

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

const Signup = () => {
  const [Signup] = useMutation(SIGNUP_GQL);
  const [Login] = useMutation(LOGIN_GQL);

  const onSubmit = (values) => {
    Signup({
      variables: {
        input: values,
      },
    })
      .then(({ data }) => {
        if (data.signUp.ok) {
          Login({
            variables: {
              input: { email: values.email, password: values.password },
            },
          }).then(({ data }) => alert(data.login.token));
        }
      })
      .catch((error) => console.log(error.message.includes("23505")));
  };

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
