import * as S from './styles'
import ContactCard from '../../components/ContactCard'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ContactsList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contact)
  return (
    <S.Container>
      <p>Numeros de Contatos: Num</p>
      <ul>
        {itens.map((c) => (
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
    </S.Container>
  )
}

export default ContactsList
