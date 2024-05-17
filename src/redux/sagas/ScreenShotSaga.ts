import { sendScreenshotRequested, sendScreenshotFailed, sendScreenshotSuccess } from '../slices/ScreenShotSlice';
import {call, put} from 'redux-saga/effects'
import axios from 'axios'
type Initials = {
    image: string
};


export function* sendScreenShot(action: {payload: Initials}): any {
    console.log("payload: " + action.payload.image)
    try{
        const config={
        headers:{
            'Content-Type': 'multipart/form-data',
            }
        }
        const formData = new FormData();
        if(action.payload.image){
            const localUri = action.payload.image;
            const filename = localUri.split('/').pop();
            const match = /\.(\w+)$/.exec(filename);
            const type = match ? `image/${match[1]}` : `image`;
            formData.append('image', { uri: localUri, name: filename, type });
        }
        console.log(formData)
        const response = yield call(()=>axios.post('https://apidev.levaapp.com:8443/api/v2/admin/addImageTest',formData,config));
        console.log(response.data)
        yield put(sendScreenshotSuccess(response.data))
        }catch(e){
          console.log(e.message)
          yield put(sendScreenshotFailed("Screenshot send failed!"))
        }
}
