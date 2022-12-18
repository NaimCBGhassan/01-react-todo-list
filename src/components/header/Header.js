import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavContainter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: #aaaaaa;
  padding: 0.8rem 0;
  gap: 0.4rem;

  @media screen and (min-width: 578px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 0;
    gap: 0;
  }
`;

const Button = styled.button`
  color: white;
  background-color: #2e9afe;
  min-width: 130px;
  margin: 0;
  border-radius: 0;

  &:hover {
    background-color: #2e9afe80;
  }
  @media screen and (min-width: 578px) {
    margin: 0.5rem;
    border-radius: 0.3rem;
  }
`;

const Header = ({ setHeader }) => {
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
        <Button value="Logout" onClick={handleClick}>
          Logout
        </Button>
        <Button onClick={handleClick}>Menu</Button>
      </NavContainter>
    </div>
  );
};

export default Header;
