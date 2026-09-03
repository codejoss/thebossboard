import { supabase } from "../lib/supabase";
import type { GridSettings, SortMode } from "../types/gridSettingsTypes";

export const getGridSettings = async (): Promise<SortMode> => {
  const { data, error } = await supabase
    .from("grid_settings")
    .select("sort_mode")
    .eq("is_active", true)
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle<Pick<GridSettings, "sort_mode">>();

  if (error) {
    throw new Error(
      `No se pudo cargar la configuración del grid: ${error.message}`,
    );
  }

  if (!data) return "created_at";
  if (data.sort_mode !== "created_at" && data.sort_mode !== "stars") {
    throw new Error(`Modo de ordenamiento inválido: ${data.sort_mode}`);
  }

  return data.sort_mode;
};
