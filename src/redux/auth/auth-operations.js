import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api/auth';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.register(data);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.statusText,
      };
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.statusText,
      };
      return rejectWithValue(error);
    }
  }
);
