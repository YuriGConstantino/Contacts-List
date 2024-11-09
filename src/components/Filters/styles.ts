import styled from 'styled-components'

type Props = {
  $active: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.$active ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.$active ? '#fefefe' : '#202020')};
  color: ${(props) => (props.$active ? '#1e90ff' : '#d5d5d5')};
  border-radius: 8px;
  text-shadow: 2px 1px 5px rgba(0, 0, 0, 0.4);
`

export const Counter = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
