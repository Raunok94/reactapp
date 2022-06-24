import React from "react";
import styled from "styled-components";
import { BsBell, BsChat, BsEnvelopeFill } from "react-icons/bs";
import { MdSearch } from "react-icons/md";

function Navbar() {
  return (
    <Nav>
      <MdSearch />
      <div className="my">
        <input type="text" placeholder="Search.." />
      </div>
      <div className="topspan">
        <BsBell />
        <BsChat />
        <BsEnvelopeFill />
      </div>
    </Nav>
  );
}

const Nav = styled.nav`

  display: flex;
  justify-content: space-between;
  color: white;
  margin: 2rem;
  .timeline {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg {
      color: var(--primary-color);
      font-size: 40rem;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    margin-bottom: 0;
    .timeline {
      gap: 1rem;
    }
  }
`;

export default Navbar;
