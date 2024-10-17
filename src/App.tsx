import SideBar from './containers/SideBar'
import ContactsList from './containers/ContactsList'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
        <ContactsList />
      </Container>
    </>
  )
}

export default App
