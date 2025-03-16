import styled, { createGlobalStyle } from 'styled-components'
import InputMask from 'react-input-mask'
import variaveis from './variaveis'

const openMenu =
  'https://img.icons8.com/?size=30&id=8113&format=png&color=ffffff'
const closeMenu =
  'https://img.icons8.com/?size=100&id=46&format=png&color=ffffff'

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Roboto Mono', monospace;
    list-style: none;
	}
`
export const devices = {
  mobile: `600px`,
  tablet: `768px`
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
  @media screen and (max-width: ${devices.mobile}) {
    display: block;
  }
`

export const MainContainer = styled.main`
  padding: 18px 40px;
  height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.8);
  color: #eee;
  > button {
    display: none;
    width: 30px;
    height: 30px;
    background: url(${openMenu}) no-repeat center / cover;
    background-color: transparent;
    border: none;
    left: 16px;
    &.active {
      background: url(${closeMenu}) no-repeat center / cover;
    }
  }
  @media screen and (max-width: ${devices.mobile}) {
    padding: 18px 20px 18px 60px;
    > button {
      display: block;
      position: absolute;
    }
  }
`
export const Field = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 0;
  border-bottom: 2px solid white;
  outline: 0;
  color: #eee;
  font-weight: bold;
  padding: 8px 0;
  background: transparent;
  letter-spacing: 1px;
  text-shadow: 1px 1px 6px black;

  &::placeholder {
    color: #eee;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const Image = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`

export const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  margin-right: 8px;
  border-radius: 8px;
`
export const SalveButton = styled(Button)`
  background-color: ${variaveis.green};
  text-shadow: 1px 1px 5px #000000a3;
`
export const NumberInputMask = styled(InputMask)`
  margin-bottom: 16px;
  border: 0;
  border-bottom: 2px solid white;
  outline: 0;
  color: #eee;
  font-weight: bold;
  padding: 8px 0;
  background: transparent;
  letter-spacing: 1px;
  text-shadow: 1px 1px 6px black;
  width: 100%;

  &::placeholder {
    color: #eee;
  }
`

export default GlobalStyle
