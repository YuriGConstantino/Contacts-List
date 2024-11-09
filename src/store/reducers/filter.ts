import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../ultils/enums/Contact'

type FilterState = {
  word?: string
  criterion: 'outros' | 'familia' | 'amigos' | 'trabalho' | 'todos'
  $group?: enums.$group
}

const initialState: FilterState = {
  word: '',
  criterion: 'todos'
}

const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeWord: (state, action: PayloadAction<string>) => {
      state.word = action.payload
    },
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      state.criterion = action.payload.criterion
      state.$group = action.payload.$group
    }
  }
})

export const { changeWord, changeFilter } = filtersSlice.actions

export default filtersSlice.reducer
