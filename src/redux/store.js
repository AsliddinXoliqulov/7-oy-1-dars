// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store; // ✅ shu qatordan so‘ng main.jsx da `import store` ishlaydi
