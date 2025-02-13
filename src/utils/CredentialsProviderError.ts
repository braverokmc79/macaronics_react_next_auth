import { AuthError } from "next-auth";

export class CredentialsProviderError extends AuthError {
    field?: string;
  
    constructor(message: string, field?: string) {
      super(message);
      this.name = "AuthError";
      this.field = field; 
    }
}
  