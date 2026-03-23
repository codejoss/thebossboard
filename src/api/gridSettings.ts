import { supabase } from '../lib/supabase';
import type { GridSettings, SortMode } from '../types/gridSettingsTypes';

export const getGridSettings = async (): Promise<SortMode> => {
  const { data, error } = await supabase
    .from('grid_settings')
    .select('*')
    .eq('is_active', true)
    .order('updated_at', { ascending: false })
    .limit(1)
    .single<GridSettings>();

  if (error) {
    // Si no hay configuración activa, usa el valor por defecto
    console.warn('No active grid settings found, defaulting to created_at', error.message);
    return 'created_at';
  }

  return data.sort_mode;
};
