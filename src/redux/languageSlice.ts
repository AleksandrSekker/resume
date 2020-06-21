import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../app/store';

interface languageState {
  value: string;
}

const initialState: languageState = {
  value: 'light',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    light: (state) => {
      state.value = 'light';
    },
    dark: (state) => {
      state.value = 'dark';
    },
  },
});

export const { light, dark } = languageSlice.actions;

export const selectLanguage = (state: RootState) => state.language.value;

export default languageSlice.reducer;
