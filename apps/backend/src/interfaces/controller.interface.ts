import { Router } from 'express';
import z from 'zod';

/**
 * Represents a controller in the application.
 */
interface Controller {
  path: string;
  router: Router;
  querySchema?: z.AnyZodObject;
}

export default Controller;
