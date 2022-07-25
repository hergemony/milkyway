import SocialIcons from './SocialIcons'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src='./images/logosmall.PNG' alt='' />

        <Flex>
          <ul>
            <li>
              A billion stars in the making... Come join us at the Milky Way
            </li>
            <li>+1-543-123-4567</li>
            <li>info@milkywayart.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; 2022 MilkyWay Art | Hergemony Digital | All rights reserved. </p>
      </Container>
    </StyledFooter>
  )
}