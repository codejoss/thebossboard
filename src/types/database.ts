export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5";
  };
  public: {
    Tables: {
      blocks: {
        Row: {
          created_at: string;
          description_of_block: string | null;
          end_date_of_block: string | null;
          id: string;
          is_active_block: boolean;
          name_of_block: string;
          number_of_block: string;
          start_date_of_block: string;
          updated_at: string;
          year_of_block: number;
        };
        Insert: {
          created_at?: string;
          description_of_block?: string | null;
          end_date_of_block?: string | null;
          id?: string;
          is_active_block?: boolean;
          name_of_block: string;
          number_of_block: string;
          start_date_of_block: string;
          updated_at?: string;
          year_of_block?: number;
        };
        Update: {
          created_at?: string;
          description_of_block?: string | null;
          end_date_of_block?: string | null;
          id?: string;
          is_active_block?: boolean;
          name_of_block?: string;
          number_of_block?: string;
          start_date_of_block?: string;
          updated_at?: string;
          year_of_block?: number;
        };
        Relationships: [];
      };
      challenges: {
        Row: {
          begin_challenge_date: string | null;
          block_id: string;
          created_at: string;
          description_of_challenge: string | null;
          end_challenge_date: string | null;
          id: string;
          is_active_challenge: boolean;
          name_of_challenge: string;
          stars_reward: number;
          updated_at: string;
        };
        Insert: {
          begin_challenge_date?: string | null;
          block_id: string;
          created_at?: string;
          description_of_challenge?: string | null;
          end_challenge_date?: string | null;
          id?: string;
          is_active_challenge?: boolean;
          name_of_challenge: string;
          stars_reward?: number;
          updated_at?: string;
        };
        Update: {
          begin_challenge_date?: string | null;
          block_id?: string;
          created_at?: string;
          description_of_challenge?: string | null;
          end_challenge_date?: string | null;
          id?: string;
          is_active_challenge?: boolean;
          name_of_challenge?: string;
          stars_reward?: number;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "challenges_block_id_fkey";
            columns: ["block_id"];
            isOneToOne: false;
            referencedRelation: "blocks";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "challenges_block_id_fkey";
            columns: ["block_id"];
            isOneToOne: false;
            referencedRelation: "ranking_by_block";
            referencedColumns: ["block_id"];
          },
        ];
      };
      grid_settings: {
        Row: {
          created_at: string;
          description: string | null;
          id: string;
          is_active: boolean;
          sort_mode: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: string;
          is_active?: boolean;
          sort_mode?: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: string;
          is_active?: boolean;
          sort_mode?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      "magnetic-boss-test": {
        Row: {
          browser: string | null;
          created_at: string | null;
          device_type: string | null;
          event_type: string;
          id: string;
          referrer: string | null;
          result_tier: string | null;
          score: number | null;
          screen_width: number | null;
          session_id: string;
          utm_campaign: string | null;
          utm_content: string | null;
          utm_medium: string | null;
          utm_source: string | null;
          utm_term: string | null;
        };
        Insert: {
          browser?: string | null;
          created_at?: string | null;
          device_type?: string | null;
          event_type: string;
          id?: string;
          referrer?: string | null;
          result_tier?: string | null;
          score?: number | null;
          screen_width?: number | null;
          session_id: string;
          utm_campaign?: string | null;
          utm_content?: string | null;
          utm_medium?: string | null;
          utm_source?: string | null;
          utm_term?: string | null;
        };
        Update: {
          browser?: string | null;
          created_at?: string | null;
          device_type?: string | null;
          event_type?: string;
          id?: string;
          referrer?: string | null;
          result_tier?: string | null;
          score?: number | null;
          screen_width?: number | null;
          session_id?: string;
          utm_campaign?: string | null;
          utm_content?: string | null;
          utm_medium?: string | null;
          utm_source?: string | null;
          utm_term?: string | null;
        };
        Relationships: [];
      };
      member_challenge_stars: {
        Row: {
          assigned_at: string;
          challenge_id: string;
          completed: boolean;
          id: string;
          member_id: string;
          notes: string | null;
          stars_earned: number;
          updated_at: string;
        };
        Insert: {
          assigned_at?: string;
          challenge_id: string;
          completed?: boolean;
          id?: string;
          member_id: string;
          notes?: string | null;
          stars_earned?: number;
          updated_at?: string;
        };
        Update: {
          assigned_at?: string;
          challenge_id?: string;
          completed?: boolean;
          id?: string;
          member_id?: string;
          notes?: string | null;
          stars_earned?: number;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "mcs_challenge_fkey";
            columns: ["challenge_id"];
            isOneToOne: false;
            referencedRelation: "challenges";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "mcs_member_fkey";
            columns: ["member_id"];
            isOneToOne: false;
            referencedRelation: "members";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "mcs_member_fkey";
            columns: ["member_id"];
            isOneToOne: false;
            referencedRelation: "ranking_by_block";
            referencedColumns: ["member_id"];
          },
        ];
      };
      member_private_data: {
        Row: {
          created_at: string;
          email: string;
          member_id: string;
          updated_at: string;
          whatsapp: string;
        };
        Insert: {
          created_at?: string;
          email: string;
          member_id: string;
          updated_at?: string;
          whatsapp: string;
        };
        Update: {
          created_at?: string;
          email?: string;
          member_id?: string;
          updated_at?: string;
          whatsapp?: string;
        };
        Relationships: [
          {
            foreignKeyName: "member_private_data_member_id_fkey";
            columns: ["member_id"];
            isOneToOne: true;
            referencedRelation: "members";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "member_private_data_member_id_fkey";
            columns: ["member_id"];
            isOneToOne: true;
            referencedRelation: "ranking_by_block";
            referencedColumns: ["member_id"];
          },
        ];
      };
      members: {
        Row: {
          address_city: string | null;
          address_country: string;
          address_state: string;
          affiliate_name: string;
          birthday: string;
          career: string;
          created_at: string;
          dream: string;
          father_last_name: string;
          id: string;
          instagram_url: string;
          is_active: boolean;
          is_autorizated: boolean;
          member_message: string;
          member_name: string;
          mother_last_name: string | null;
          motivation: string;
          nickname: string;
          picture_url: string;
          tiktok_url: string | null;
          updated_at: string;
          website_url: string | null;
          youtube_url: string | null;
        };
        Insert: {
          address_city?: string | null;
          address_country?: string;
          address_state: string;
          affiliate_name: string;
          birthday: string;
          career: string;
          created_at?: string;
          dream: string;
          father_last_name: string;
          id?: string;
          instagram_url: string;
          is_active?: boolean;
          is_autorizated?: boolean;
          member_message: string;
          member_name: string;
          mother_last_name?: string | null;
          motivation: string;
          nickname: string;
          picture_url: string;
          tiktok_url?: string | null;
          updated_at?: string;
          website_url?: string | null;
          youtube_url?: string | null;
        };
        Update: {
          address_city?: string | null;
          address_country?: string;
          address_state?: string;
          affiliate_name?: string;
          birthday?: string;
          career?: string;
          created_at?: string;
          dream?: string;
          father_last_name?: string;
          id?: string;
          instagram_url?: string;
          is_active?: boolean;
          is_autorizated?: boolean;
          member_message?: string;
          member_name?: string;
          mother_last_name?: string | null;
          motivation?: string;
          nickname?: string;
          picture_url?: string;
          tiktok_url?: string | null;
          updated_at?: string;
          website_url?: string | null;
          youtube_url?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      ranking_by_block: {
        Row: {
          block_id: string | null;
          block_name: string | null;
          block_rank: number | null;
          block_stars: number | null;
          member_id: string | null;
          member_name: string | null;
          nickname: string | null;
          number_of_block: string | null;
          year_of_block: number | null;
        };
        Relationships: [];
      };
    };
    Functions: {
      authorize_member: { Args: { p_member_id: string }; Returns: undefined };
      block_member: { Args: { p_member_id: string }; Returns: undefined };
      get_all_members_admin: {
        Args: never;
        Returns: {
          address_city: string;
          address_country: string;
          address_state: string;
          affiliate_name: string;
          birthday: string;
          career: string;
          created_at: string;
          dream: string;
          email: string;
          father_last_name: string;
          id: string;
          instagram_url: string;
          is_active: boolean;
          is_autorizated: boolean;
          member_message: string;
          member_name: string;
          mother_last_name: string;
          motivation: string;
          nickname: string;
          picture_url: string;
          tiktok_url: string;
          updated_at: string;
          website_url: string;
          whatsapp: string;
          youtube_url: string;
        }[];
      };
      insert_member_with_private_data: {
        Args: {
          p_address_city: string;
          p_address_country: string;
          p_address_state: string;
          p_affiliate_name: string;
          p_birthday: string;
          p_career: string;
          p_dream: string;
          p_email: string;
          p_father_last_name: string;
          p_instagram_url: string;
          p_member_message: string;
          p_member_name: string;
          p_mother_last_name: string;
          p_motivation: string;
          p_nickname: string;
          p_picture_url: string;
          p_tiktok_url: string;
          p_website_url: string;
          p_whatsapp: string;
          p_youtube_url: string;
        };
        Returns: Json;
      };
      update_member_with_private_data: {
        Args: {
          p_address_city: string;
          p_address_country: string;
          p_address_state: string;
          p_affiliate_name: string;
          p_birthday: string;
          p_career: string;
          p_dream: string;
          p_email?: string;
          p_father_last_name: string;
          p_instagram_url: string;
          p_is_active: boolean;
          p_is_autorizated: boolean;
          p_member_id: string;
          p_member_message: string;
          p_member_name: string;
          p_mother_last_name: string;
          p_motivation: string;
          p_nickname: string;
          p_picture_url: string;
          p_tiktok_url: string;
          p_website_url: string;
          p_whatsapp?: string;
          p_youtube_url: string;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<
  keyof Database,
  "public"
>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    keyof DefaultSchema["Enums"] | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  public: {
    Enums: {},
  },
} as const;
