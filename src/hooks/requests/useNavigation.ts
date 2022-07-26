import { gql, useQuery } from '@apollo/client';
import { DataResponse } from '../../models';

export const GET_NAVIGATION = gql`
  query Query {
    navigation {
      name
      path
    }
    profileSettings {
      name
      path
    }
}
`;

export const useNavigation=()=>{
    const { loading, error, data} = useQuery<DataResponse>(GET_NAVIGATION);
      return {loading,data,error}
}

