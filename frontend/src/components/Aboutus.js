import SocialIcons from './SocialIcons'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledAboutus } from './styles/Aboutus.styled'

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
            <li>info@milkywayart.com</li>
          </ul>
          <ul>
            <li>

THE MILKY WAY HEADQUARTERS:

We are located in the bustling, eclectic suburb of Newtown in Sydney, Australia.
Come visit us!

335 King Street, NEWTOWN, NSW, 2042
AUSTRALIA.

Contact:

Ph: 02 9557 1506

Opening times:

Monday:7:30am - 8pm
Tuesday:7:30am - 8pm
Wednesday:7:30am - 8pm
Thursday:7:30am - 8pm
Friday:7:30am - 8pm
Saturday:7:30am - 8pm
Sunday/Public holidays: Closed.

</li>
          </ul>



        <p>&copy; 2022 MilkyWay Art | Hergemony Digital | All rights reserved. </p>
      </Container>
    </StyledFooter>
  )
}