import { devices } from '../../styles/index'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Formcontainer = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  display: flex;
  flex-direction: column;
`

export const Name = styled.h2`
  display: block;
  margin: 40px 0;
  font-size: 18px;
  font-weight: bold;
`

export const Options = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 8px;
  }

  label {
    margin-right: 16px;
  }
`
export const Option = styled.div`
  display: inline;
  text-transform: capitalize;
  @media screen and (max-width: ${devices.mobile}) {
    display: inline-block;
    margin: 8px 0;
  }
`
export const ImageContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const AddImageBtn = styled.input`
  &::file-selector-button {
    font-weight: bold;
    font-size: 12px;
    color: #000;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    background-color: ${variaveis.white};
    margin-right: 8px;
    border-radius: 8px;
  }
`
