import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsX } from "react-icons/bs";

import logo from "../assets/clicks-base-logo.png";
import CartButtons from "./CartButtons";
import { useFunctionalContext } from "../context/functionalContext";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useFunctionalContext();
  // user context
  const loggedUser = true;

  return (
    <SidebarContainer>
      <aside
        className={
          isSidebarOpen
            ? "section-center sidebar sidebar-show"
            : "section-center sidebar"
        }
      >
        <div className="sidebar-header">
          <img className="sidebar-logo" src={logo} alt="clicks" />
          <button
            className="btn-sidebar-close"
            onClick={closeSidebar}
            type="button"
          >
            <BsX />
          </button>
        </div>
        <ul className="sidebar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          {loggedUser && (
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;

  .sidebar {
    height: fit-content;

    opacity: 0;
    background-color: var(--grey-50);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-m);

    position: fixed;
    top: min(2.5vw, 1rem);
    left: calc(2.5vw - 1px);
    right: calc(2.5vw - 1px);
    z-index: 99;

    transition: var(--transition);
    transform: translate(0, -100vh);
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4.5rem;
    padding: 0.75rem 1rem;
  }
  .sidebar-logo {
    height: 100%;
  }

  .btn-sidebar-close {
    color: var(--primary-500);

    background: transparent;
    border: none;
    cursor: pointer;

    svg {
      font-size: 2rem;
    }
  }

  .sidebar-links {
    margin-bottom: 2rem;
    a {
      display: block;
      padding: 1rem 1.5rem;
      margin: 0 auto;

      font-size: 1.25rem;
      color: var(--grey-700);

      transition: var(--transition);
    }
    a:hover {
      padding-top: 0.5rem;
      padding-bottom: 1.5rem;
      background-color: var(--grey-100);
    }
  }

  .cart-btn-wrapper {
    margin: 2rem auto;
  }

  .sidebar-show {
    opacity: 1;
    transform: translate(0);
  }

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export default Sidebar;
