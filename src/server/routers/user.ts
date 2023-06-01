import { router } from '../trpc';
import {
  addProof,
  checkUsername,
  createUser,
  findOneUser,
  searchUser,
} from './users';

export const userRouter = router({
  create: createUser,
  findOne: findOneUser,
  searchUser: searchUser,
  checkUsername: checkUsername,
  addProof: addProof,
});
