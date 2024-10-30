import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../ultils/enums/Contact'

type FilterState = {
  word?: string
  criterion: 'family' | 'friends' | 'work' | 'others' | 'all'
  group?: enums.Group
}

const initialState: FilterState = {
  word: '',
  criterion: 'all'
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
      state.group = action.payload.group
    }
  }
})

export const { changeWord, changeFilter } = filtersSlice.actions

export default filtersSlice.reducer
