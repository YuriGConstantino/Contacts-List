import { Image, MainContainer, SalveButton } from '../../styles'
import * as S from './styles'
import { Field } from '../../styles'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as enums from '../../ultils/enums/Contact'
import { register } from '../../store/reducers/contact'

export const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [$group, set$group] = useState(enums.$group.OTHERS)
  const [image, setImage] = useState(
    'https://t4.ftcdn.net/jpg/05/09/59/75/360_F_509597532_RKUuYsERhODmkxkZd82pSHnFtDAtgbzJ.jpg'
  )

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const registerAccountant = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      register({
        name,
        phoneNumber,
        email,
        $group,
        image
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <S.Name>Novo Cadastro</S.Name>
      <S.Formcontainer onSubmit={registerAccountant}>
        <S.ImageContainer>
          {image ? (
            <Image src={image} alt="Imagem do contado" />
          ) : (
            <Image
              src="https://t4.ftcdn.net/jpg/05/09/59/75/360_F_509597532_RKUuYsERhODmkxkZd82pSHnFtDAtgbzJ.jpg"
              alt="Imagem do contado"
            />
          )}
          <S.AddImageBtn
            type="file"
            onChange={handleImageChange}
            accept="image/*"
          />
        </S.ImageContainer>
        <Field
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Nome Completo"
        />
        <Field
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="number"
          placeholder="Numero do Telefone"
        />
        <Field
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <S.Options>
          <p>Grupo</p>
          {Object.values(enums.$group).map(($group) => (
            <S.Option key={$group}>
              <input
                value={$group}
                onChange={(e) => set$group(e.target.value as enums.$group)}
                type="radio"
                name="$group"
                id={$group}
                defaultChecked={$group === enums.$group.OTHERS}
              />{' '}
              <label htmlFor={$group}>{$group}</label>
            </S.Option>
          ))}
        </S.Options>
        <SalveButton type="submit" value="Register">
          Cadastrar
        </SalveButton>
      </S.Formcontainer>
    </MainContainer>
  )
}
