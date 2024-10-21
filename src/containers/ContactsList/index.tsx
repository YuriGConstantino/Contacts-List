import * as S from './styles'
import ContactCard from '../../components/ContactCard'

import * as enums from '../../ultils/enums/Contact'

const contacts = [
  {
    title: 'fasop',
    phoneNumber: 'xxxx-xxxx',
    email: 'relvufi@zukib.ms',
    group: enums.Group.FAMILY
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
            group={c.group}
          />
        </li>
      ))}
    </ul>
  </S.Container>
)

export default ContactsList
