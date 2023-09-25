import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import platforms from "../data/platforms";

const apiClient = new APIClient<Platfrom>("/platforms/lists/parents");

interface Platfrom {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });

export default usePlatforms;
