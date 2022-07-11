export interface User {
  id?: number;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  password?: string; // TODO move to UserCred interface
}
