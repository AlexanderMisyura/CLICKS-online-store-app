import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsCart2, BsPersonPlus, BsPersonDash } from "react-icons/bs";

const CartButtons = () => {
  // user context
  const loggedUser = false;
  // cart context
  const cartTotalItems = 0;

  return (
    <StyledButtons className="cart-btn-wrapper">
      <Link className="cart-btn" to="/cart">
        Cart
        <span className="cart-icon">
          <BsCart2 />
          <span className="cart-icon-value">{cartTotalItems}</span>
        </span>
      </Link>
      {loggedUser ? (
        <button className="auth-btn" type="button">
          Logout
          <BsPersonDash />
        </button>
      ) : (
        <button className="auth-btn" type="button">
          Login
          <BsPersonPlus />
        </button>
      )}
    </StyledButtons>
  );
};

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;

  .cart-btn {
    display: flex;
    align-items: center;

    font-size: 1.25rem;
    color: var(--grey-900);
    letter-spacing: var(--letterSpacing);
  }

  .cart-icon {
    display: flex;
    align-items: center;
    position: relative;
  }

  .cart-icon-value {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;

    font-size: 0.8rem;

    background-color: var(--secondary-100);
    border-radius: 50%;

    position: absolute;
    top: -6px;
    right: -8px;
    padding: 10px;
  }

  .auth-btn {
    display: flex;
    align-items: center;

    font-size: 1.25rem;
    color: var(--grey-900);
    letter-spacing: var(--letterSpacing);
    cursor: pointer;

    background-color: transparent;
    border: none;
  }

  svg {
    margin-left: 5px;
    font-size: 1.7rem;
  }
`;

export default CartButtons;
