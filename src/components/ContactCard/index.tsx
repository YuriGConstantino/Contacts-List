import { useDispatch } from 'react-redux'
import { edit, remove } from '../../store/reducers/contact'
import * as S from './styles'
import * as enums from '../../ultils/enums/Contact'
import { Field, Image, NumberInputMask, SalveButton } from '../../styles'
import { useEffect, useState } from 'react'

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
  name: originalDataName,
  phoneNumber: originalDataNumber,
  email: originalDataEmail,
  $group,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (originalDataName.length > 0) {
      setName(originalDataName)
    }
  }, [originalDataName])

  useEffect(() => {
    if (originalDataNumber.length > 0) {
      setPhoneNumber(originalDataNumber)
    }
  }, [originalDataNumber])

  useEffect(() => {
    if (originalDataEmail.length > 0) {
      setEmail(originalDataEmail)
    }
  }, [originalDataEmail])

  function editingCancel() {
    setEditing(false)
    setName(originalDataName)
    setPhoneNumber(originalDataNumber)
    setEmail(originalDataEmail)
  }

  return (
    <S.Card>
      {editing ? (
        <>
          <S.Container $group={$group}>
            <Image src={image} alt={name} />
            <Field
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Nome Completo"
            />
          </S.Container>
          <ul>
            <S.ContactInfo>
              Telefone:{' '}
              <NumberInputMask
                mask="(99)99999-9999"
                maskChar={null}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Numero do Telefone"
              />
            </S.ContactInfo>
            <S.ContactInfo>
              E-mail:{' '}
              <Field
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="E-mail"
              />
            </S.ContactInfo>
          </ul>
        </>
      ) : (
        <>
          <S.Container $group={$group}>
            <Image src={image} alt={name} />
            <S.Name>{name}</S.Name>
          </S.Container>
          <ul>
            <S.ContactInfo>Telefone: {phoneNumber}</S.ContactInfo>
            <S.ContactInfo>E-mail: {email}</S.ContactInfo>
          </ul>
        </>
      )}

      <S.ActionBar>
        {editing ? (
          <>
            <SalveButton
              onClick={() => {
                dispatch(
                  edit({
                    image,
                    name,
                    phoneNumber,
                    email,
                    $group,
                    id
                  })
                )
                setEditing(false)
              }}
            >
              Salvar
            </SalveButton>
            <S.CancelRemoveButton onClick={() => editingCancel()}>
              Cancelar
            </S.CancelRemoveButton>
          </>
        ) : (
          <>
            <S.EditButton onClick={() => setEditing(true)}>Editar</S.EditButton>
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
