import React from "react";
import styled from "styled-components";
import { Input } from "semantic-ui-react";

const InputStyled = styled(Input)`
  padding-bottom: 15px;
`;

const ErrorStyle = styled.span`
  font-size: 12px;
  font-style: italic;
  color: red;
`;

const FormLabel = styled.div`
  padding-bottom: 6px;
`;

const SInput = ({ input, meta, ...rest }) => (
  <div>
    <FormLabel>
      <strong>
        {rest.text} {meta.error && meta.touched && <ErrorStyle>{meta.error}</ErrorStyle>}
      </strong>
    </FormLabel>
    <InputStyled error={meta.error && meta.touched} fluid {...input} {...rest} />
  </div>
);

export { SInput };
