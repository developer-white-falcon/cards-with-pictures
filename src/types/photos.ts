export type Urls = {
  raw: string,
  full: string,
  regular: string,
  small: string,
  thumb: string,
  small_s3: string,
}

export type PhotosLinks = {
  self: string,
  html: string,
  download: string,
  download_location: string,
}

export type Sponsor = {
  id: string,
  updated_at: string | null,
  username: string,
  name: string,
  first_name: string | null,
  last_name: string | null,
  twitter_username: string | null,
  portfolio_url: string | null,
  bio: string | null,
  location: string | null,
}
export type SponsorshipLinks = {
  self: string,
  html: string,
  photos: string,
  likes: string,
  portfolio: string,
  following: string,
  followers: string,
}
export type ProfileImage = {
  small: string,
  medium: string,
  large: string,
}
export type Social = {
  instagram_username: string | null,
  portfolio_url: string | null,
  twitter_username: string | null,
  paypal_email: string | null,
}
export type Sponsorship = {
  impression_urls: string[],
  tagline: string,
  tagline_url: string,
  sponsor: Sponsor,
  links: SponsorshipLinks,
  profile_image: ProfileImage,
  instagram_username: string | null,
  total_collections: number,
  total_likes: number,
  total_photos: number,
  accepted_tos: boolean,
  for_hire: boolean,
  social: Social,
}

export type BusinessWork = {
  status: string,
  approved_on: string,
}
export type TopicSubmissions = {
  'business-work': BusinessWork,
}

export type UserLinks = {
  self: string,
  html: string,
  photos: string,
  likes: string,
  portfolio: string | null,
  following: string | null,
  followers: string | null,
}
export type User = Sponsor & {
  links: UserLinks,
  profile_image: ProfileImage,
  instagram_username: string | null,
  total_collections: number,
  total_likes: number,
  total_photos: number,
  accepted_tos: boolean,
  for_hire: boolean,
  social: Social,
}

export type Photo = {
  id: string,
  created_at: string,
  updated_at: string | null,
  promoted_at: string | null,
  width: number,
  height: number,
  color: string,
  blur_hash: string,
  description: string | null,
  alt_description: string | null,
  urls: Urls,
  links: PhotosLinks,
  categories: string[],
  likes: number,
  liked_by_user: boolean,
  current_user_collections: string[],
  sponsorship: Sponsorship,
  topic_submissions: TopicSubmissions,
  user: User,
}

export type PhotosState = {
  photos: Photo[],
  isLoading: boolean,
  error: string | null,
  page: number,
  isDisplayLikedPhotos: boolean,
  popupImageUrl: string | null,
}

export enum PhotosActionTypes {
  FETCH_PHOTOS = 'FETCH_PHOTOS',
  FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
  FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR',
  SET_PHOTOS_PAGE = 'SET_PHOTOS_PAGE',
  TOGGLE_LIKE = 'TOGGLE_LIKE',
  REMOVE_PHOTO = 'REMOVE_PHOTO',
  TOGGLE_DISPLAY_LIKED_PHOTOS = 'TOGGLE_DISPLAY_LIKED_PHOTOS',
  TOGGLE_SHOW_IMAGE_POPUP = 'TOGGLE_SHOW_IMAGE_POPUP',
}

type FetchPhotosAction = {
  type: PhotosActionTypes.FETCH_PHOTOS,
}
type FetchPhotosSuccessAction = {
  type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS,
  photos: Photo[],
}
type FetchPhotosErrorAction = {
  type: PhotosActionTypes.FETCH_PHOTOS_ERROR,
  errorMessage: string,
}
type SetPhotosPage = {
  type: PhotosActionTypes.SET_PHOTOS_PAGE,
  page: number,
}
type RemovePhoto = {
  type: PhotosActionTypes.REMOVE_PHOTO,
  id: string,
}
type ToggleLike = {
  type: PhotosActionTypes.TOGGLE_LIKE,
  id: string,
}
type ToggleDisplayLikedPhotos = {
  type: PhotosActionTypes.TOGGLE_DISPLAY_LIKED_PHOTOS,
  displayLikedPhotos: boolean,
}
type toggleShowImagePopup = {
  type: PhotosActionTypes.TOGGLE_SHOW_IMAGE_POPUP,
  value: string | null,
}
export type PhotosActions =
  FetchPhotosAction
  | FetchPhotosSuccessAction
  | FetchPhotosErrorAction
  | SetPhotosPage
  | RemovePhoto
  | ToggleLike
  | ToggleDisplayLikedPhotos
  | toggleShowImagePopup
