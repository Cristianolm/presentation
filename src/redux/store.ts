import { configureStore } from "@reduxjs/toolkit";
import { timesOutSlice } from "./states/timesOut.slice";
import { deviceSlice } from "./states/device.slice";

export const store = configureStore({
  reducer: {
    device: deviceSlice.reducer,
    timesOut: timesOutSlice.reducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
