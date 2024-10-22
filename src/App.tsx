import SideBar from './containers/SideBar'
import ContactsList from './containers/ContactsList'
import GlobalStyle, { Container } from './styles'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <SideBar />
        <ContactsList />
      </Container>
    </Provider>
  )
}

export default App
