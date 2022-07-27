import { createSlice } from "@reduxjs/toolkit";

const filter = createSlice({
    name: 'filter',
    initialState: {
        page: 1,
        name: '',
        _sort: 0,
        _order: 0
    },
    reducers: {
        setFilterSlice: (state, action) => {
            state = action.payload
            return state
        }
    }
})
export const { setFilterSlice } = filter.actions
export default filter.reducer