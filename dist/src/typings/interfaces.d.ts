import { ArticleState, EndPoint, ListingCategory, NumberResolvable, Tags, TypeOfArticle, TypeOfMember, VideoDurationFormat } from "./types";
export interface AuthorizationOptions {
    cacheMe: boolean;
}
export interface BasePageFetchOptions {
    page: NumberResolvable;
    tag: Tags;
    tags: Tags[];
    username: string;
    state: ArticleState;
    top: NumberResolvable;
}
export interface Comment {
    typeOf: 'comment';
    idCode: string;
    createdAt: string;
    bodyHtml: string;
    user: User;
    children: Comment[] | null;
}
export interface RawComment {
    type_of: 'comment';
    id_code: string;
    created_at: string;
    body_html: string;
    user: RawUser;
    children: RawComment[] | null;
}
export interface DEVErrorResponse {
    error: string;
    status: number;
}
export interface PageFetchOptions extends BasePageFetchOptions {
    perPage: NumberResolvable;
    tagsExclude: Tags[];
    collectionId: NumberResolvable;
}
export interface FinalPageFetchOptions extends BasePageFetchOptions {
    per_page: number;
    tags_exclude: string;
    collection_id: number;
}
export interface BaseArticle {
    id: number;
    title: number;
    description: string;
    tags: Tags[];
    slug: string;
    path: string;
    url: string;
}
export interface Article extends BaseArticle {
    typeOf: TypeOfArticle;
    coverImage: string | null;
    readablePublishDate: string;
    socialImage: string;
    tagList: string;
    canonicalUrl: string;
    commentsCount: number;
    positiveReactionsCount: number;
    publicReactionsCount: number;
    createdAt: string;
    editedAt: string | null;
    crosspostedAt: string | null;
    publishedAt: string;
    lastCommentAt: string;
    publishedTimestamp: string;
    bodyHtml?: string;
    bodyMarkdown?: string;
    readingTimeMinutes: number;
    user: User;
    organization: Organization;
    flareTag: FlareTag;
}
export interface RawArticle extends BaseArticle {
    type_of: TypeOfArticle;
    cover_image: string | null;
    readable_publish_date: string;
    social_image: string;
    tag_list: string;
    canonical_url: string;
    comments_count: number;
    positive_reactions_count: number;
    public_reactions_count: number;
    created_at: string;
    edited_at: string | null;
    crossposted_at: string | null;
    published_at: string;
    last_comment_at: string;
    published_timestamp: string;
    body_html: string;
    reading_time_minutes: number;
    user: RawUser;
    organization: RawOrganization;
    flare_tag: RawFlareTag;
}
export interface BaseOrganization {
    name: string;
    username: string;
    slug: string;
}
export interface Organization extends BaseOrganization {
    profileImage: string;
    profileImage90: string;
}
export interface RawOrganization extends BaseOrganization {
    profile_image: string;
    profile_image_90: string;
}
export interface BaseNewArticleData {
    title: string;
    published: boolean;
    series?: string;
    description: string;
    tags: Tags[];
}
export interface NewArticleData extends BaseNewArticleData {
    bodyMarkdown: string;
    mainImage?: string;
    canonicalUrl?: string;
    organizationId?: string;
}
export interface RawNewArticleData extends BaseNewArticleData {
    body_markdown: string;
    main_image: string;
    canonical_url: string;
    organization_id: string;
}
export interface PostOptions {
    method: 'GET' | 'POST' | 'PUT';
    headers: {
        'Content-Type'?: 'application/json' | string;
        'api-key': string;
    };
    body?: string;
}
export interface BaseUser {
    id: number;
    name: string;
    username: string;
}
export interface User extends BaseUser {
    typeOf: TypeOfMember;
    twitterUsername: string | null;
    githubUsername: string | null;
    websiteUrl: string | null;
    profileImage: string;
    profileImage90: string;
}
export interface RawUser extends BaseUser {
    type_of: TypeOfMember;
    twitter_username: string | null;
    github_username: string | null;
    website_url: string | null;
    profile_image: string;
    profile_image_90: string;
}
export interface BaseFlareTag {
    name: string;
}
export interface FlareTag extends BaseFlareTag {
    bgColorHex: string;
    textColorHex: string;
}
export interface RawFlareTag extends BaseFlareTag {
    bg_color_hex: string;
    text_color_hex: string;
}
export interface FollowedTags {
    id: number;
    name: Tags;
    points: number;
}
export interface BaseFollower {
    id: number;
    name: string;
    path: EndPoint;
    username: string;
}
export interface Follower extends BaseFollower {
    typeOf: 'user_follower';
    createdAt: string;
    profileImage: string;
}
export interface RawFollower extends BaseFollower {
    type_of: 'user_follower';
    created_at: string;
    profile_image: string;
}
export interface BaseListing {
    id: number;
    title: string;
    slug: string;
    tags: Tags[];
    category: string;
    published: boolean;
}
export interface Listing extends BaseListing {
    typeOf: 'listing';
    createdAt: string;
    bodyMarkdown: string;
    tagList: string;
    processedHtml: string;
    user: Omit<User, 'id'>;
}
export interface RawListing extends BaseListing {
    type_of: 'listing';
    created_at: string;
    body_markdown: string;
    tag_list: string;
    processed_html: string;
    user: Omit<RawUser, 'id'>;
}
export interface BaseVideoArticle {
    id: string;
    path: string;
    title: string;
}
export interface VideoArticle extends BaseVideoArticle {
    typeOf: TypeOfArticle;
    cloudinaryVideoUrl: string;
    userId: string;
    videoDurationInMinutes: VideoDurationFormat;
    videoSourceUrl: string;
    user: Pick<User, 'name'>;
}
export interface RawVideoArticle extends BaseVideoArticle {
    type_of: TypeOfArticle;
    cloudinary_video_url: string;
    user_id: string;
    video_duration_in_minutes: VideoDurationFormat;
    video_source_url: string;
    user: Pick<RawUser, 'name'>;
}
export interface ArticleIdentifierOptions {
    aId: NumberResolvable;
    pId?: never;
}
export interface FinalArticleIdentifierOptions {
    a_id: NumberResolvable;
}
export interface PodcastIdentifierOptions {
    pId: NumberResolvable;
    aId?: never;
}
export interface FinalPodcastIdentifierOptions {
    p_id: NumberResolvable;
}
export interface ListingCategoryOptions {
    category: ListingCategory;
}
export interface SortOptions {
    sort: string;
}
