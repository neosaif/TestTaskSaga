import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
    name: 'users',
    initialState: [{
        id: 0,
        name: '',
        email: '',
        age: 0,
        avatarUrl:'',
        bio : '',
        color : '',
        createdAt: '',
        isPublic: false,
        statusMessage: '',
    }],
    reducers: {
        getUsersSlice: (state, action) => {
            state = action.payload
            return state
        },
        createUserSlice: (state, action) => {
            state.push(action.payload)
            return state
        },
        updateUserSlice: (state, action) => {
            state = state.map(i => i.id == action.payload.id ? action.payload : i)
            return state
        },
        deleteUserSlice: (state, action) => {
            state = state.filter(i => i.id !== action.payload)
            return state
        }
    }
})
export const { getUsersSlice, createUserSlice, updateUserSlice, deleteUserSlice } = users.actions
export default users.reducer