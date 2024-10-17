import * as S from './styles'
import Task from '../../components/Task'

const ContactsList = () => (
  <S.Container>
    <p>Numeros de Contatos: Num</p>
    <ul>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
    </ul>
  </S.Container>
)

export default ContactsList
