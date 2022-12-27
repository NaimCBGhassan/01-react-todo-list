import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavContainter = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2e9afe;

  @media screen and (min-width: 578px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 0;
    gap: 0;
  }
`;
const P = styled.p`
  margin: 0 auto;
  color: white;
  @media screen and (min-width: 578px) {
    min-width: 130px;
    margin: 0.5rem 0 0.5rem 1.5rem;
  }
`;

const Button = styled.button`
  min-width: 100%;
  border: none;
  margin: 0;
  border-radius: 0;

  &:hover {
    background-color: #2e9afe;
  }

  @media screen and (min-width: 578px) {
    min-width: 130px;
    margin: 0.5rem;
    border-radius: 0.3rem;

    &:hover {
      color: white;
      border: thin solid black;
    }
  }
`;

const Header = ({ setHeader, user }) => {
  const navigate = useNavigate();

  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") setHeader(false);
  }, [location]);

  const handleClick = (e) => {
    if (e.target.value === "Logout") {
      navigate("/");
    } else {
      navigate("/home");
    }
  };
  return (
    <div>
      <NavContainter>
        <P onClick={handleClick}>{user.username}</P>
        <Button onClick={handleClick}>Menu</Button>
        <Button value="Logout" onClick={handleClick}>
          Logout
        </Button>
      </NavContainter>
    </div>
  );
};

export default Header;
