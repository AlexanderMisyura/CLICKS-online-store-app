import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { HiBars4 } from "react-icons/hi2";

import logo from "../assets/clicks-base-logo.png";
import CartButtons from "./CartButtons";
import { useSidebarContext } from "../context/sidebarContext";

const Navbar = () => {
  const { openSidebar } = useSidebarContext();
  // user context
  const loggedUser = true;

  return (
    <StyledNav>
      <div className="nav-content section-center">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="clicks" />
          </Link>
        </div>
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
          {loggedUser && (
            <li>
              <NavLink to="/checkout">Checkout</NavLink>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: sticky;
  top: min(2.5vw, 1rem);
  z-index: 20;

  .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4.5rem;
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

        border: transparent;

        transition: var(--transition);

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
`;

export default Navbar;
