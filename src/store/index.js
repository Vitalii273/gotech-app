import { configureStore } from '@reduxjs/toolkit';
import mainState from "./mainState/main"


export const store = configureStore({
    reducer: {
        mainState,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})
