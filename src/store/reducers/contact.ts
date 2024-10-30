import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../ultils/enums/Contact'

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    itens: [
      {
        title: 'AAAA',
        phoneNumber: 'XXXX-XXX',
        email: 'efzo@jeti.tt',
        group: enums.Group.FAMILY,
        id: 1
      },
      {
        title: 'BBBB',
        phoneNumber: 'XXXX-XXX',
        email: 'efzo@jeti.tt',
        group: enums.Group.FRIENDS,
        id: 2
      },
      {
        title: 'CCCC',
        phoneNumber: 'XXXX-XXX',
        email: 'efzo@jeti.tt',
        group: enums.Group.WORK,
        id: 3
      },
      {
        title: 'DDDD',
        phoneNumber: 'XXXX-XXX',
        email: 'efzo@jeti.tt',
        group: enums.Group.OTHERS,
        id: 4
      }
    ]
  },
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contact) => contact.id !== action.payload
      )
    }
  }
})

export const { remove } = contactSlice.actions
export default contactSlice.reducer
