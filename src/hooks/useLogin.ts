

import { gql ,useMutation} from '@apollo/client';
import {LoginData } from '../models';

export const LOGIN = gql`
  mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
`;

export const useLogin=()=>{
    const [loginUser,{ loading, error, data} ]= useMutation(LOGIN);
      return {loginUser,loading,data,error}
}
