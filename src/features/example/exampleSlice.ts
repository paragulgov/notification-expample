import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { fetchData } from './exampleAPI'

export interface CounterState {
  data: any;
}

const initialState: CounterState = {
  data: null,
}

export const fetchDataAsync = createAsyncThunk(
  'example/fetchData',
  async () => {
    const response = await fetchData()
    return response
  }
)

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAsync.fulfilled, (state, action) => {
        state.data = action.payload
      })
  },
})

export const selectData = (state: RootState) => state.example.data

export default exampleSlice.reducer
