import { createContext, useState, type ReactNode, type Dispatch, type SetStateAction } from "react";

interface Member {
  id: number;
  name: string;
  city_country: string;
  carrer: string;
  profileImage: string;
  socialNetwork: string;
}

interface MembersContextType {
  members: Member[];
  setMembers: Dispatch<SetStateAction<Member[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  error: Error | null;
  setError: Dispatch<SetStateAction<Error | null>>;
  selectedMemberId: number | null;
  setSelectedMemberId: Dispatch<SetStateAction<number | null>>;
}

export const MembersContext = createContext<MembersContextType>({
  members: [],
  setMembers: () => { },
  loading: true,
  setLoading: () => { },
  error: null,
  setError: () => { },
  selectedMemberId: null,
  setSelectedMemberId: () => { },
});

export function MembersProvider({ children }: { children: ReactNode }) {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [selectedMemberId, setSelectedMemberId] = useState<number | null>(null);

  const value = {
    members,
    setMembers,
    loading,
    setLoading,
    error,
    setError,
    selectedMemberId,
    setSelectedMemberId,
  };

  return (
    <MembersContext.Provider value={value}>{children}</MembersContext.Provider>
  );
}
