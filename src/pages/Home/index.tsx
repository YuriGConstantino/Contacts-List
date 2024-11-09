import ContactsList from '../../containers/ContactsList'
import SideBar from '../../containers/SideBar'

const Home = () => (
  <>
    <SideBar showFilters />
    <ContactsList />
  </>
)

export default Home
