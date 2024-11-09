import * as S from './styles'
import { MainContainer } from '../../styles'
import ContactCard from '../../components/ContactCard'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import ButtonAdd from '../../components/ButtonAdd'

const ContactsList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contact)
  const { word, criterion, $group } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterContact = () => {
    let filterContacts = itens

    if (word !== undefined) {
      filterContacts = filterContacts.filter(
        (item) => item.name.toLowerCase().search(word.toLowerCase()) >= 0
      )
      if ($group === criterion) {
        filterContacts = filterContacts.filter(
          (item) => item.$group === criterion
        )
      }
      return filterContacts
    } else {
      return itens
    }
  }
  return (
    <MainContainer>
      <S.ListContainer>
        {filterContact().map((c) => (
          <li key={c.name}>
            <ContactCard
              image={c.image}
              name={c.name}
              phoneNumber={c.phoneNumber}
              email={c.email}
              $group={c.$group}
              id={c.id}
            />
          </li>
        ))}
      </S.ListContainer>
      <ButtonAdd />
    </MainContainer>
  )
}

export default ContactsList
