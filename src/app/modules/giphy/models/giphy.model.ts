export interface GiphyUser {
  attribution_display_name: string;
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  description: string;
  display_name: string;
  facebook_url: string;
  id: number;
  instagram_url: string;
  is_public: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  is_verified: boolean;
  name: string;
  profile_url: string;
  suppress_chrome: boolean;
  tumblr_url: string;
  twitter: string;
  twitter_url: string;
  user_type: string;
  username: string;
  website_display_url: string;
}

export interface GiphyImage {
  height: string;
  size: string;
  url: string;
  width: string;
}

export interface GiphyImages {
  '480w_still': GiphyImage;
  downsized: GiphyImage;
  downsized_large: GiphyImage;
  downsized_medium: GiphyImage;
  downsized_small: GiphyImage;
  downsized_still: GiphyImage;
  fixed_height: GiphyImage;
  fixed_height_downsampled: GiphyImage;
  fixed_height_small: GiphyImage;
  fixed_height_small_still: GiphyImage;
  fixed_height_still: GiphyImage;
  fixed_width: GiphyImage;
  fixed_width_downsampled: GiphyImage;
  fixed_width_small: GiphyImage;
  fixed_width_small_still: GiphyImage;
  fixed_width_still: GiphyImage;
  looping: GiphyImage;
  original: GiphyImage;
  original_mp4: GiphyImage;
  original_still: GiphyImage;
  preview: GiphyImage;
  preview_gif: GiphyImage;
  preview_webp: GiphyImage;
  source: GiphyImage;
}

export interface Giphy {
  create_datetime: string;
  featured_tags: string[];
  has_attribution: boolean;
  id: string;
  images: GiphyImages;
  import_datetime: string;
  index_id: 12678659;
  is_anonymous: 0;
  is_community: 0;
  is_featured: 0;
  is_hidden: 0;
  is_realtime: 0;
  is_removed: 0;
  is_sticker: 0;
  rating: string;
  slug: string;
  source: string;
  source_post_url: string;
  source_tld: string;
  tags: string[];
  title: string;
  trending_datetime: string;
  type: string;
  update_datetime: string;
  url: string;
  user: GiphyUser;
}
