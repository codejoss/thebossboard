import { supabase } from "../lib/supabase";
import type { RankingByBlocksType } from "../types/rankingByBlocksTypes";

export const getRankingByBlock = async (): Promise<RankingByBlocksType[]> => {
  const { data: activeBlock, error: blockError } = await supabase
    .from("blocks")
    .select("id")
    .eq("is_active_block", true)
    .limit(2);

  if (blockError)
    throw new Error(
      `No se pudo cargar el bloque activo: ${blockError.message}`,
    );
  if (!activeBlock?.length) return [];
  if (activeBlock.length > 1)
    throw new Error("Hay más de un bloque activo configurado");

  const { data, error } = await supabase
    .from("ranking_by_block")
    .select(
      "block_id, block_name, year_of_block, member_id, member_name, nickname, block_stars, block_rank, number_of_block",
    )
    .eq("block_id", activeBlock[0].id)
    .order("block_rank", { ascending: true });

  if (error) throw new Error(error.message);
  return (data ?? []) as RankingByBlocksType[];
};
