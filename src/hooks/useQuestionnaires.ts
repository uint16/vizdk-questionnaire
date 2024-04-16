import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import response from "../utils/decision-tree.json";

export const useQuestionnaire = () => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["questionnaires"],
    queryFn: async () => {
      return await response
    },
  });

  return {
    questionnaire: data!,
    isLoading,
    isError,
    isSuccess
  }
}
