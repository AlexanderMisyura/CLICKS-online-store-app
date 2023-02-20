import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { HiBars4 } from "react-icons/hi2";

import logo from "../assets/clicks-base-logo.png";
import CartButtons from "./CartButtons";
import { useSidebarContext } from "../context/sidebarContext";

const Navbar = () => {
  const { openSidebar } = useSidebarContext();

  return (
    <StyledNav>
      <div className="nav-content">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="clicks" />
          </Link>
        </div>
        {/* hidden on big screen */}
        <button
          className="btn-sidebar-open"
          onClick={openSidebar}
          type="button"
        >
          <HiBars4 />
        </button>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
        <CartButtons />
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
    align-items: center;
    height: 4.5rem;
    margin: 0 1rem;
    padding: 0.75rem 1rem;

    background-color: var(--grey-50);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-m);
  }

  .nav-logo {
    display: flex;
    height: 100%;
  }

  img {
    height: 100%;
  }

  .btn-sidebar-open {
    background: transparent;
    border: none;
    color: var(--primary-500);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }

  .nav-links {
    display: none;
  }

  .cart-btn-wrapper {
    display: none;
  }

  @media screen and (min-width: 992px) {
    .btn-sidebar-open {
      display: none;
    }
    .nav-links {
      display: flex;
      li {
        margin: 0 0.5rem;
      }
      a {
        padding: 0.5rem;

        color: var(--grey-700);
        letter-spacing: var(--letterSpacing);
        &.active {
          border-bottom: 1px solid var(--primary-400);
        }
        &:hover {
          border-bottom: 1px solid var(--primary-200);
        }
      }
    }
    .cart-btn-wrapper {
      display: flex;
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
