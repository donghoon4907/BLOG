export interface Avatar {
  url: string;
}

export interface Notice {
  id: string;
  title: string;
  description: string;
  updatedAt: string;
}

// export type User = {
//   id?: string;
//   nickname?: String;
//   email?: String;
//   createdAt?: String;
//   updatedAt?: String;
//   avatar?: Avatar;
//   posts?: Post[];
//   likes?: Like[];
//   followedBy?: User[];
//   following?: User[];
//   rooms?: Room[];
//   isFollowing?: boolean;
//   isMe?: boolean;
//   isMaster?: boolean;
// };

// enum PostStatus {
//   PUBLIC = "PUBLIC",
//   PRIVATE = "PRIVATE"
// }

// export type Post = {
//   id: string;
//   title: string;
//   description: string;
//   video: Video;
//   user: User;
//   likes: Like[];
//   createdAt: string;
//   updatedAt: string;
//   status: PostStatus;
//   isLiked: boolean;
//   likeCount: number;
//   isMyPost: boolean;
//   room: Room;
// };

// export type Like = {
//   id?: string;
//   user?: User;
//   post?: Post;
// };

// export type Avatar = {
//   id?: string;
//   url?: string;
//   user?: User;
//   post?: Post;
// };

// enum VideoStatus {
//   queue = "queue",
//   working = "working",
//   complete = "complete"
// }

// export type Video = {
//   id?: string;
//   url?: string;
//   url_240p?: string;
//   url_320p?: string;
//   url_480p?: string;
//   url_720p?: string;
//   url_1080p?: string;
//   status?: VideoStatus;
// };

// export type Room = {
//   id?: string;
//   participants?: User[];
//   messages?: Message[];
//   recentMyMessage?: Message;
//   createdAt?: string;
//   updatedAt?: string;
//   post?: Post;
// };

// export type Message = {
//   id?: string;
//   content?: string;
//   from?: User;
//   to?: User;
//   room?: Room;
//   createdAt?: string;
//   updatedAt?: string;
// };

// export type Alert = {
//   id?: string;
//   user?: User;
//   content?: string;
// };

// export type Notice = {
//   id?: string;
//   title?: string;
//   description?: string;
//   createdAt?: string;
//   updatedAt?: string;
// };

// export type SearchKeyword = {
//   id?: string;
//   keyword?: string;
//   createdAt?: string;
//   user?: User;
// };
