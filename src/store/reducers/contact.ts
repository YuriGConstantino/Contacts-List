import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/contact'
import * as enums from '../../ultils/enums/Contact'

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    itens: [
      new Contact('AAAA', 'XXXX-XXX', 'efzo@jeti.tt', enums.Group.FAMILY, 1),
      new Contact('BBBB', 'XXXX-XXX', 'efzo@jeti.tt', enums.Group.FRIENDS, 2),
      new Contact('CCCC', 'XXXX-XXX', 'efzo@jeti.tt', enums.Group.WORK, 3),
      new Contact('DDDD', 'XXXX-XXX', 'efzo@jeti.tt', enums.Group.OUTROS, 4)
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
