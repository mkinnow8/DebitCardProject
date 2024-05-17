import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    spendingLimit: 0,
    isSpendingLimit: false
}

const DebitCardSlice = createSlice({
    name: 'DebitCardSlice',
    initialState,
    reducers:{
        setSpendingLimit: (state, action)=>{
            state.spendingLimit = action.payload.spendingLimit
            state.isSpendingLimit = action.payload.isSpendingLimit
        },
    }

})

export const { setSpendingLimit } = DebitCardSlice.actions;
export default DebitCardSlice.reducer;