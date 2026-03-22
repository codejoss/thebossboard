import { supabase } from '../lib/supabase';
import type { Member } from '../types/members';

export const getMembers = async (): Promise<Member[]> => {
  const { data, error } = await supabase
    .from('members')
    .select('*')

  if (error) throw new Error(error.message)
  return data ?? []
}