import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { HiBars4 } from "react-icons/hi2";

import logo from "../assets/clicks-base-logo.png";

const Navbar = () => {
  return (
    <StyledNav>
      <div className="nav-content">
        <Link to="/">
          <img src={logo} alt="clicks" />
        </Link>
        {/* hidden on big screen */}
        <button type="button" className="btn-sidebar-open">
          <HiBars4 />
        </button>
        <div className="links-container"></div>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  max-width: var(--max-width);
  margin: 0 auto;

  position: sticky;
  top: 1rem;

  .nav-content {
    display: flex;
    justify-content: space-between;
    height: 4.5rem;
    margin: 0 1rem;
    padding: 0.75rem 1rem;

    background-color: #fff;
    border-radius: var(--borderRadius);
  }

  img {
    height: 100%;
  }

  .btn-sidebar-open {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }

  /* display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4.5rem;
  max-width: var(--maxWidth);
  margin: 1rem 1rem 0 1rem;

  background-color: #fff;
  border-radius: var(--borderRadius);

  position: sticky;
  z-index: 20; */
`;

export default Navbar;
