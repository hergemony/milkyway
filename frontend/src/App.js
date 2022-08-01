import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import { Container } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global'
import content from './content'
import RegisterUser from './pages/RegisterUser'

// create react router to connect RegisterUser page to button
const theme = {
  colors: {
    header: '#fff',
    body: '#000',
    footer: '#000',
  },
  mobile: '768px',
}


function App() {
 

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />

        {/* <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container> */}
        {/* <Dashboard /> */}
        <RegisterUser />
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App;