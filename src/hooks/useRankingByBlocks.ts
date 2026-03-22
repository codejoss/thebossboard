import { useQuery } from '@tanstack/react-query'
import { getRankingByBlock } from '@/api/rankinkByBlocks'

export const useRankingByBlocks = () => {
  return useQuery({
    queryKey: ['rankingByBlocks'],
    queryFn: getRankingByBlock,
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}