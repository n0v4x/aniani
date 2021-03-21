import useSwr from "swr";
import { API_URL } from "../config";

const fetcher = (url: string): Promise<Response> => fetch(url).then((res) => res.json());

const useRequest = (path: string) => {
  const slash = path[0] === "/" ? "" : "/";
  const url = `${API_URL}${slash}${path}`;

  const { data, error } = useSwr(url, fetcher);

  return { data, error };
};

export default useRequest;
