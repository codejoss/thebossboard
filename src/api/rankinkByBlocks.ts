import { supabase } from '../lib/supabase';
import type { RankingByBlocksType } from '../types/rankingByBlocksTypes';

export const getRankingByBlock = async (): Promise<RankingByBlocksType[]> => {
  const { data, error } = await supabase
    .from('ranking_by_block')
    .select('*')

  if (error) throw new Error(error.message)
  return data ?? []
}