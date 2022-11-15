import fetchBreedList from "./fetchBreedList";
import { useQuery } from "@tanstack/react-query";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status];
}
