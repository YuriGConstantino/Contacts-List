import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../ultils/enums/Contact'
import Contact from '../../models/contact'

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    itens: [
      {
        image:
          'https://raichu-uploads.s3.amazonaws.com/logo_ebac-escola-britanica-de-artes-criativas_OZaMv9.png',
        name: 'EBAC',
        phoneNumber: '(11) 4200-2991',
        email: 'info@ebac.art.br',
        $group: enums.$group.OTHERS,
        id: 1
      }
    ]
  },
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contact) => contact.id !== action.payload
      )
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.itens[contactIndex] = action.payload
      }
    },
    register: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const existingAccount = state.itens.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      )
      if (existingAccount) {
        alert('Nome já cadastrado')
      } else {
        const lastContact = state.itens[state.itens.length - 1]

        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.itens.push(newContact)
      }
    }
  }
})

export const { remove, edit, register } = contactSlice.actions
export default contactSlice.reducer
