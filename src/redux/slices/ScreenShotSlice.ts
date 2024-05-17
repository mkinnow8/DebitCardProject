import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isProcessing: false
}

const ScreenShotSlice = createSlice({
    name: 'ScreenShotSlice',
    initialState,
    reducers:{
        sendScreenshotRequested: (state, action)=>{
            state.isProcessing = true;
        },
        sendScreenshotSuccess: (state, action)=>{
            state.isProcessing = false;
        },
        sendScreenshotFailed: (state, action)=>{
            state.isProcessing = false;
        },
    }

})

export const { sendScreenshotRequested, sendScreenshotSuccess, sendScreenshotFailed } = ScreenShotSlice.actions;
export default ScreenShotSlice.reducer;