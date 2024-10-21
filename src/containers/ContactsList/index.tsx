import * as S from './styles'
import ContactCard from '../../components/ContactCard'

const contacts = [
  {
    title: 'fasop',
    phoneNumber: 'xxxx-xxxx',
    email: 'relvufi@zukib.ms'
  }
]

const ContactsList = () => (
  <S.Container>
    <p>Numeros de Contatos: Num</p>
    <ul>
      {contacts.map((c) => (
        <li key={c.title}>
          <ContactCard
            title={c.title}
            phoneNumber={c.phoneNumber}
            email={c.email}
          />
        </li>
      ))}
    </ul>
  </S.Container>
)

export default ContactsList
