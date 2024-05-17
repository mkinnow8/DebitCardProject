import {all, takeLatest} from 'redux-saga/effects';
import { sendScreenshotRequested } from '../slices/ScreenShotSlice';
import {TakeableChannel} from 'redux-saga';
import { sendScreenShot } from './ScreenShotSaga';

function* SendScreenshotApi(){
  yield takeLatest(
    sendScreenshotRequested.type as unknown as TakeableChannel<unknown>,
    sendScreenShot,
  );
}

export default function* RootSaga() {
  yield all([SendScreenshotApi()]);
}
