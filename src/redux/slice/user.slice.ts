import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: {
        id: 0,
        name: '',
        email: '',
        age: '',
        bio : '',
        avatarUrl:'https://i.pravatar.cc/150?u=17436',
        color : '#FFFFFF',
        createdAt: new Date().toLocaleDateString(),
        isPublic: true,
        statusMessage: 'working from home',
    },
    reducers: {
        setUserSlice: (state, action) => {
            state = action.payload
            return state
        }
    }
})
export const { setUserSlice } = user.actions
export default user.reducer