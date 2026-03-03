export interface Member {
  id:               string;
  member_name:             string;
  father_last_name: string;
  mother_last_name: string;
  nickname:         string;
  birthday:         Date;
  address_city:             string;
  address_state:            string;
  address_country:          string;
  career:           string;
  dream:            string;
  affiliate_name:   string;
  motivation:       string;
  instagram_url:    string;
  tiktok_url:       string;
  youtube_url:      string;
  website_url:      string;
  member_message:          string;
  picture_url:      string;
  created_at:       Date;
  updated_at:       Date;
  is_active:        boolean;
  is_autorizated:   boolean;
}
