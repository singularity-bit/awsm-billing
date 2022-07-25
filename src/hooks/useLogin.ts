import { gql, useMutation } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($input: LoginInput) {
  login(input: $input) {
    token
  }
}
`;

export const useLogin = () => {
  const [loginUser, { loading, error, data }] = useMutation<{
    login: {
      token: string;
    };
  }>(LOGIN);
  return { loginUser, loading, data, error };
};
