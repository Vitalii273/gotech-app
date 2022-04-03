import { createSelector } from '@reduxjs/toolkit';

export const getLanguagesSelector = createSelector(({ mainState }) => (mainState?.languages), (x) => x);
export const getFeedbackSelector = createSelector(({ mainState }) => (mainState?.feedback), (x) => x);
export const getLoaderSelector = createSelector(({ mainState }) => (mainState?.isLoading), (x) => x);
