import React, { useState } from "react";
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { Button } from "./styles/Button.styled";
import Register from "./Register";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logosmall.PNG" alt="" />
          <Logo src="./images/milkywaydotsmall.PNG" alt="" />
          <Button>REGISTER AS AN ARTIST</Button>
        </Nav>

        <Flex>
          <div>
            <h1>A billion stars in the making...</h1>

            <p>
              Milky Way is an online art gallery where you can upload your art
              and find a prospective buyer. Get started for free!
            </p>
            {showModal === true ? (
              <div>
                <Register setShowModal={setShowModal}/>
              </div>
            ) : (
              <Button
              bg="#ff0099"
              color="#fff"
              onClick={() => setShowModal((prev) => !prev)}>
                LOGIN
              </Button>
            )}
          </div>

          <Image src="./images/galindo.jpg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
