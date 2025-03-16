import styled from 'styled-components'
import { devices } from '../../styles'

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  @media screen and (max-width: ${devices.mobile}),
    (max-width: ${devices.tablet}) {
    grid-template-columns: 1fr;
  }
`
