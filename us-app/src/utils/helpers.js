export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export const friendlyError = (error) => error?.message || 'Oops! Something went wrong';
