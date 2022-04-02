import { createSelector } from '@reduxjs/toolkit';

export const getInitialValuesSelector = createSelector(({ mainState }) => (mainState?.initialValues), (x) => x);
export const getLanguagesSelector = createSelector(({ mainState }) => (mainState?.languages), (x) => x);
export const getFeedbackSelector = createSelector(({ mainState }) => (mainState?.feedback), (x) => x);
