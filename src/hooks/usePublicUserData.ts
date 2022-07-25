import { gql, useQuery } from "@apollo/client";
import { TokenData } from "../models";

export const USER=gql`
query User {
  currentUser {
    user {
      email
      firstName
      lastName
      role
      permissions
    }
  }
}`

export const usePublicUserData=()=>{
    const { loading, error, data} = useQuery<TokenData>(USER);
      return {loading,data,error}
}
