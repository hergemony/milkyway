import SocialIcons from './SocialIcons'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src='./images/logosmall.png' alt='' />

        <Flex>
          <ul>
            <li>
              A billion stars in the making... Come join us at the Milky Way
            </li>
            <li>Ph: 02 9557 1506</li>
            <li>info@milkywayart.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>Location</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us<a href='https://linkedin.com'></a></li>

          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; 2022 MilkyWay Art | Hergemony Digital | All rights reserved. </p>
      </Container>
    </StyledFooter>
  )
}