import { supabase } from '../lib/supabase';
import type { RankingByBlocksType } from '../types/rankingByBlocksTypes';



export const getRankingByBlock = async (): Promise<RankingByBlocksType[]> => {
  const { data: activeBlock } = await supabase
    .from('blocks')
    .select('*')
    .eq('is_active_block', true)
  console.debug("🚀 ~ getRankingByBlock ~ activeBlock:", activeBlock)

  const activeBlockId = activeBlock?.map((block) => block.id) ?? []

  const { data, error } = await supabase
    .from('ranking_by_block')
    .select('*')
    .in('block_id', activeBlockId)

  if (error) throw new Error(error.message)
  console.debug("🚀 ~ getRankingByBlock ~ data:", data)
  return data ?? []
}