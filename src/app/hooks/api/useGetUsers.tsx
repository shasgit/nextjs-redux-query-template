import { Users } from "@/backend/db";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetUsers = (staleTime: number) => {
  return useQuery<Users[]>({
    queryKey: ["users1"],
    queryFn: () => fetchProducts(),
    staleTime: staleTime,
  });
};

const fetchProducts = async (): Promise<Users[]> => {
  const { data } = await axios.get("/example1/api");
  return data;
};

export default useGetUsers;
