import { createSlice } from "@reduxjs/toolkit";

const count = createSlice({
    name: 'count',
    initialState: 0,
    reducers: {
        setCount: (state, action) => {
            state = action.payload
            return state
        }
    }
})
export const { setCount } = count.actions
export default count.reducer