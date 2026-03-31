export const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const minLength = (value, length) => (value || '').length >= length;
