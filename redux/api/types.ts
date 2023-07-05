export interface IUser {
  email: string;
 password: string,
  firstName?: string,
  lastName?: string
}

export interface IGenericResponse {
  status: string;
  message: string;
}
