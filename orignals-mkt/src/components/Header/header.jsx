import React from "react";
import "./header.scss"
import { Container } from "reactstrap";

const Header = () => {
  return (
  <header className="header">
    <Container>
      <div className="navigation">
        <div className="logo">
          <h2 className=" d-flex gap-2 align-items-center ">
            <span>
              <i className="ri-fire-fill"></i>
            </span>
            Originals
          </h2>
        </div>
      </div>
    </Container>
  </header>
  )
};

export default Header;
