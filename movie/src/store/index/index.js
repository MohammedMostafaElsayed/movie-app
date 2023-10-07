import { configureStore } from "@reduxjs/toolkit";
import watchSlice from "../slice/watch"

export default configureStore({
    reducer : {watch : watchSlice}
});