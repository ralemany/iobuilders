const EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const isValidEmail = (email: string) => EMAIL_REGEXP.test(email);
