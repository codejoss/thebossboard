import { useQuery } from '@tanstack/react-query';
import { getGridSettings } from '@/api/gridSettings';

export const useGridSettings = () => {
  return useQuery({
    queryKey: ['gridSettings'],
    queryFn: getGridSettings,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};
