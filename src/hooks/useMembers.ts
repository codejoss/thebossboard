import { useQuery } from '@tanstack/react-query'
import { getMembers } from '../api/members'

export const useMembers = () => {
  return useQuery({
    queryKey: ['members'],
    queryFn: getMembers,
    staleTime: 1000 * 60 * 15, // 15 minutes
  })
}