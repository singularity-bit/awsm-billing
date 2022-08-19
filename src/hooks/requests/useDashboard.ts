import { gql, useQuery } from "@apollo/client";
import { DashboardRequestType } from "../../models";

const GET_DASHBOARD=gql`
query Query {
  dashboard {
    icon
    title
    content
  }
}
`;

export const useDashboard=()=>{
    const {loading,error,data}=useQuery<DashboardRequestType>(GET_DASHBOARD);
    return {loading,error,data}
}