import { configureStore } from "@reduxjs/toolkit";
import courseFormReducer from "../modules/CourseForm/store/store";
import lessonFormReducer from "../modules/VideoLessonForm/store/store";
import videoFormReducer from "../modules/AddVideoForm/store/store";

export const store = configureStore({
  reducer: {
    courseForm: courseFormReducer,
    lessonForm: lessonFormReducer,
    videoForm: videoFormReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
