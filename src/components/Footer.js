import styled from "styled-components";
import { FaLinkedin, FaGithub, FaUserTie } from "react-icons/fa";

const Footer = () => {
  return (
    <StyledFooter>
      <ul className="footer-icons">
        <li>
          <a
            href="https://github.com/AlexanderMisyura"
            title="github"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alexander-misyura"
            title="linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://alexandermisyura.github.io/"
            title="personal portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <FaUserTie />
          </a>
        </li>
      </ul>
      <p>
        &copy; {new Date().getFullYear()}, <span>Alexander Misyura</span>
      </p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10rem;

  color: var(--secondary-800);

  background-color: var(--primary-700);

  .footer-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 10rem;
    a {
      font-size: 2rem;
      color: var(--secondary-800);
    }
    a:hover {
      color: var(--secondary-700);
    }
  }

  p {
    margin: 0.5rem;
    letter-spacing: var(--letterSpacing);
  }
`;

export default Footer;
