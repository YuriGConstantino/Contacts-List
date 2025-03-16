import styled from 'styled-components'
import { devices } from '../../styles'

export const Aside = styled.aside`
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.9);
  height: 100vh;

  @media screen and (max-width: ${devices.mobile}) {
    display: none;
    &.active {
      padding-top: 60px;
      position: absolute;
      display: block;
      width: 70vw;
    }
  }
`

export const Filters = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
  @media screen and (max-width: ${devices.mobile}) {
    grid-template-columns: 1fr;
  }
`
