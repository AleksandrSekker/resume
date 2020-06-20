import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../app/store';

interface languageState {
  value: string;
}

const initialState: languageState = {
  value: 'Hello',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    greetEng: (state) => {
      state.value = 'Hello';
    },
    greetUa: (state) => {
      state.value = 'Привіт';
    },
  },
});

export const { greetEng, greetUa } = languageSlice.actions;

export const selectLanguage = (state: RootState) => state.language.value;

export default languageSlice.reducer;
