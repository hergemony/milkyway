import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ArtService from './ArtService'

const initialState = {
  Arts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new Art
export const createArt = createAsyncThunk(
  'Arts/create',
  async (ArtData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await ArtService.createArt(ArtData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user Arts
export const getArts = createAsyncThunk(
  'Arts/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await ArtService.getArts(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user Art
export const deleteArt = createAsyncThunk(
  'Arts/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await ArtService.deleteArt(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const ArtSlice = createSlice({
  name: 'Art',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createArt.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createArt.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.Arts.push(action.payload)
      })
      .addCase(createArt.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getArts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getArts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.Arts = action.payload
      })
      .addCase(getArts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteArt.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteArt.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.Arts = state.Arts.filter(
          (Art) => Art._id !== action.payload.id
        )
      })
      .addCase(deleteArt.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = ArtSlice.actions
export default ArtSlice.reducer