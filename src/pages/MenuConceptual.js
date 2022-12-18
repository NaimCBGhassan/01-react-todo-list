import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #bbbbbb;
`;
const H2 = styled.h2`
  padding: 0.6rem;
`;
const NavLink = styled(Link)`
  padding: 0.3rem;
  background-color: #cccccc;
  transition: background-color 0.5s ease-in-out, padding 0.5s ease-in-out;
  &:hover {
    padding: 1rem;
    background-color: #bbbbbb;
  }
`;

const MenuConceptual = () => {
  return (
    <Div>
      <H2>Menu Conceptual</H2>
      <NavLink to="/todo-app">TodoApp</NavLink>
      <NavLink to="/todo-api">TodoApi</NavLink>
    </Div>
  );
};

export default MenuConceptual;
