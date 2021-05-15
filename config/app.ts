import { ENV } from './env';

export const isProduction = ENV === 'production';
export const isDebug = ENV === 'development';

export const apiEndpoint = isDebug ? 'http://localhost:3065' : 'productEndpoints';
