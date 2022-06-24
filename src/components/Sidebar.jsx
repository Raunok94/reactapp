import React from "react";
import styled from "styled-components";
import { RiNeteaseCloudMusicLine } from "react-icons/ri";

import logo1 from "assets/avatar.png";

import { BiCog, BiHomeAlt } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { TbClipboardText } from "react-icons/tb";
import { BsQuestionCircle } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";

function Sidebar() {
  return (
    <Aside id="sidebar">
      <div className="brand">
        <RiNeteaseCloudMusicLine />
      </div>
      <hr />
      <div className="image">
      <img src={logo1} alt = "hello" width="50" height="50"/>
      </div>
        <br />
      <ul className="links">
        <li className="selected">
          <BiHomeAlt />
        </li>
        <li>
          <IoBookOutline />
        </li>
        <li>
          <TbClipboardText />
        </li>
        <br />
        <br />
        <li>
          <BiCog />
        </li>
        <li>
          <BsQuestionCircle />
        </li>
        <li>
          <FiLogOut />
        </li>
      </ul>
    </Aside>
  );
}

const Aside = styled.aside`
  background-color: rgb(43, 182, 193);
  height: 100%;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  svg {
    color: rgb(0, 110, 128);
    font-size: 1.5rem;
  }
  .brand {
    svg {
      font-size: 2.5rem;
    }
  }
  .image{
    border-radius:0.5rem;
  }
  .links {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style-type: none;
    li {
      border-radius: 0.5rem;
      padding: 0.5rem;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        color: rgb(0, 110, 128);
      }
      &:hover {
        box-shadow: 0 0 6px 8px var(--primary-color);
        svg {
          color: var(--primary-color);
        }
      }
    }
    .selected {
      box-shadow: 0 0 6px 8px var(--primary-color);
      svg {
        color: rgb(0, 110, 128);
        background-color: transparent;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    width: 100%;
    padding: 1rem;
    .links,
    .help {
      display: none;
    }
  }
`;

export default Sidebar;
