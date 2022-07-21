import { StyledHeader } from './styles/Header.styled'
import { Container } from './styles/Container.styled'

export default function Header () {
    return (
    <StyledHeader>
        <Container>
            <Nav>
                <Logo src='./images/logo.svg' alt='' />
                <Button>View The Artists</Button>

            </Nav>

            <Flex>
                <div>
                    <h1>Join our Community of Artists</h1>
                    <p>
                        The Milky Way is an online art gallery where individuals can showcase their original works of art.
                    </p>

                    <Button bg='#CA00FF' color='#fff'>
                        Register as an Artist

                    </Button>

                    <Image src='./images/'
                </div>
            </Flex>
        </Container>
    </StyledHeader>
    )
}

