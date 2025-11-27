import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/posts';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Error al obtener los posts');
  }
});

export const createPost = createAsyncThunk('posts/createPost', async (postData, { rejectWithValue }) => {
  try {
    const response = await axios.post(API_URL, postData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Error al crear el post');
  }
});

export const updatePost = createAsyncThunk('posts/updatePost', async ({ id, postData }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, postData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Error al actualizar el post');
  }
});

export const deletePost = createAsyncThunk('posts/deletePost', async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Error al eliminar el post');
  }
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    filteredItems: [],
    filterText: '',
    status: 'idle',
    error: null
  },
  reducers: {
    setFilterText: (state, action) => {
      state.filterText = action.payload;
      if (action.payload === '') {
        state.filteredItems = state.items;
      } else {
        state.filteredItems = state.items.filter(post =>
          post.name.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.filteredItems = state.filterText
          ? action.payload.filter(post =>
              post.name.toLowerCase().includes(state.filterText.toLowerCase())
            )
          : action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
        state.filteredItems = state.filterText
          ? state.items.filter(post =>
              post.name.toLowerCase().includes(state.filterText.toLowerCase())
            )
          : state.items;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.items.findIndex(post => post.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.filteredItems = state.filterText
          ? state.items.filter(post =>
              post.name.toLowerCase().includes(state.filterText.toLowerCase())
            )
          : state.items;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.items = state.items.filter(post => post.id !== action.payload);
        state.filteredItems = state.filterText
          ? state.items.filter(post =>
              post.name.toLowerCase().includes(state.filterText.toLowerCase())
            )
          : state.items;
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.error = action.payload;
      });
  }
});

export const { setFilterText, clearError } = postsSlice.actions;
export default postsSlice.reducer;
