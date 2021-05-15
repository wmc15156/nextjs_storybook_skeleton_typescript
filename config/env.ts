export const ENV = (process.env.NODE_ENV as 'production' | 'test' | 'development') || 'development';

console.log(ENV, 'ENV');
