import { useQuery } from "@tanstack/react-query";
import { getRankingByBlock } from "@/api/rankingByBlocks";

export const useRankingByBlocks = (enabled = true) => {
  return useQuery({
    queryKey: ["rankingByBlocks"],
    queryFn: getRankingByBlock,
    staleTime: 1000 * 60 * 10, // 10 minutes
    enabled,
  });
};
