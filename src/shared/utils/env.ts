import { config as autoConfig } from 'dotenv';

autoConfig();

export const env = (key: string) => {
  return process.env[key];
};
