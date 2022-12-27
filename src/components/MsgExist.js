import React from "react";
import styled from "styled-components";

const H3 = styled.h3`
  position: absolute;
  top: 0;
  text-align: center;
  padding: 1rem 0;
  width: 100%;
  background-color: #ffffff80;
`;

const MsgExist = ({ msg }) => {
  return <H3>{msg}!</H3>;
};

export default MsgExist;
