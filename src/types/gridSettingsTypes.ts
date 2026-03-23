export type SortMode = 'created_at' | 'stars';

export interface GridSettings {
  id: string;
  sort_mode: SortMode;
  description: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
