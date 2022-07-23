import { gql, useMutation } from "@apollo/client";
import { IUserData } from "../models";

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        role
        permissions
      }
    }
  }
`;

export const useLogin = () => {
  const [loginUser, { loading, error, data }] = useMutation<{
    login: {
      token: string;
      user: IUserData;
    };
  }>(LOGIN);
  return { loginUser, loading, data, error };
};
