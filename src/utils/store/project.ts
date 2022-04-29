import { useQuery, useMutation } from "@apollo/client";
import { GET_PROJECT } from "../queries/project";

export const GetProjects = () => {
    const { data, loading, error, refetch } = useQuery(GET_PROJECT);
    const availableData = data && data.getProject;

    if (error) {
      console.log('error')
    }
    return {
      projects: availableData,
      loading,
      error,
      refetch,
    };
  };