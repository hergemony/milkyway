import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./images/logosmall.PNG' alt='' />
          <Logo src='./images/milkywaydotsmall.PNG' alt='' />
          <Button>REGISTER AS AN ARTIST</Button>
        </Nav>

        <Flex>
          <div>
            <h1>A billion stars in the making...</h1>

            <p>
              Milky Way is an online art gallery where you can upload your art and find a prospective buyer.
            </p>

            <Button bg='#ff0099' color='#fff'>
              Get Started For Free
            </Button>
          </div>

          <Image src='./images/milkywaypexels.jpeg' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}