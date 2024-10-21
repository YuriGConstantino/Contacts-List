import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
`

export const Filters = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`

export const Field = styled.input`
  padding: 8px;
  border: 0;
  border-bottom: 2px solid white;
  outline: 0;
  color: #fff;
  font-weight: bold;
  padding: 8px 0;
  background: transparent;
  letter-spacing: 2px;
`
