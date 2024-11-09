import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../../store/reducers/contact'
import * as S from './styles'
import * as enums from '../../ultils/enums/Contact'
import { Image, Button, SalveButton } from '../../styles'

type Props = {
  image: string
  name: string
  phoneNumber: string
  email: string
  $group: enums.$group
  id: number
}

const ContactCard = ({
  image,
  name,
  phoneNumber,
  email,
  $group,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  return (
    <S.Card>
      <S.Container $group={$group}>
        <Image src={image} alt={name} />
        <S.Name>{name}</S.Name>
      </S.Container>
      <ul>
        <S.ContactInfo>Telefone: {phoneNumber}</S.ContactInfo>
        <S.ContactInfo>E-mail: {email}</S.ContactInfo>
      </ul>
      <S.ActionBar>
        {editing ? (
          <>
            <SalveButton>Salvar</SalveButton>
            <S.CancelRemoveButton onClick={() => setEditing(false)}>
              Cancelar
            </S.CancelRemoveButton>
          </>
        ) : (
          <>
            <Button onClick={() => setEditing(true)}>Editar</Button>
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
