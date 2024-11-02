import * as S from './styles'
import ContactCard from '../../components/ContactCard'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import ButtonAdd from '../../components/ButtonAdd'

const ContactsList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contact)
  const { word, criterion, group } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterContact = () => {
    let filterContacts = itens

    if (word !== undefined) {
      filterContacts = filterContacts.filter(
        (item) => item.title.toLowerCase().search(word.toLowerCase()) >= 0
      )
      if (group === criterion) {
        filterContacts = filterContacts.filter(
          (item) => item.group === criterion
        )
      }
      return filterContacts
    } else {
      return itens
    }
  }
  return (
    <S.Container>
      <ul>
        {filterContact().map((c) => (
          <li key={c.title}>
            <ContactCard
              title={c.title}
              phoneNumber={c.phoneNumber}
              email={c.email}
              group={c.group}
              id={c.id}
            />
          </li>
        ))}
      </ul>
      <ButtonAdd />
    </S.Container>
  )
}

export default ContactsList
