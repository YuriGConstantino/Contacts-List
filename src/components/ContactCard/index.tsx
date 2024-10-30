import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../../store/reducers/contact'
import * as S from './styles'
import * as enums from '../../ultils/enums/Contact'

type Props = {
  title: string
  phoneNumber: string
  email: string
  group: enums.Group
  id: number
}

const ContactCard = ({ title, phoneNumber, email, group, id }: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  return (
    <S.Card>
      <S.Container group={group}>
        <S.Avatar src="https://dummyimage.com/80x80.png"></S.Avatar>
        <S.Title>{title}</S.Title>
      </S.Container>
      <ul>
        <S.ContactInfo>Telefone: {phoneNumber}</S.ContactInfo>
        <S.ContactInfo>E-mail: {email}</S.ContactInfo>
      </ul>
      <S.ActionBar>
        {editing ? (
          <>
            <S.SalveButton>Salvar</S.SalveButton>
            <S.CancelRemoveButton onClick={() => setEditing(false)}>
              Cancelar
            </S.CancelRemoveButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setEditing(true)}>Editar</S.Button>
            <S.CancelRemoveButton onClick={() => dispatch(remove(id))}>
              Remover
            </S.CancelRemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default ContactCard
