import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'

export const ButtonAddIcon = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
  height: 64px;
  width: 64px;
  background-color: ${variaveis.green};
  color: ${variaveis.white};
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
`
