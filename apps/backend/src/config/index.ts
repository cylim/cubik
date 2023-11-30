import * as dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config();

const envVarsSchema = Joi.object().keys({
  NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
  PORT: Joi.number().default(8000),
  SECRET: Joi.string().required(),
  INFURA_API_KEY: Joi.string().required(),
  INFURA_API_KEY_SECRET: Joi.string().required(),
});

const { value: validatedEnv, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env, { abortEarly: false, stripUnknown: true });

if (error) {
  throw new Error(
    `Environment variable validation error: \n${error.details
      .map((detail) => detail.message)
      .join('\n')}`,
  );
}

export const envConfig = {
  node_env: validatedEnv.NODE_ENV,
  port: validatedEnv.PORT,
  secret: validatedEnv.SECRET,
  infura_api_key: validatedEnv.INFURA_API_KEY,
  infura_api_key_secret: validatedEnv.INFURA_API_KEY_SECRET,
} as const;
