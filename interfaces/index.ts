/**
 * * 사용자 정보 인터페이스
 *
 * @property id            - ID
 * @property nickname      - 별칭
 * @property email         - 이메일
 * @property isMaster      - 운영자 여부
 * @property createdAt     - 등록일
 * @property updatedAt     - 수정일
 * @property avatar        - 프로필 사진
 * @property posts         - 내가 쓴 포스트 목록
 * @property likes         - 내가 좋아요한 게시물 목록
 * @property comments      - 내가 작성한 댓글 목록
 * @property postCount     - 내가 작성한 포스트 수
 */
export interface UserProps {
  id: string;
  nickname: string;
  email: string;
  isMaster: boolean;
  createdAt: string;
  updatedAt: string;
  avatar: AvatarProps;
  posts: PostProps[];
  likes: LikeProps[];
  comments: CommentProps[];
  postCount: number;
}
/**
 * * 게시물 정보 인터페이스
 *
 * @property id            - ID
 * @property title         - 제목
 * @property description   - 소개
 * @property content       - 내용
 * @property user          - 등록자
 * @property likeCount     - 좋아요 수
 * @property likes         - 좋아요한 사용자 목록
 * @property createdAt     - 등록일
 * @property updatedAt     - 수정일
 * @property viewCount     - 조회수
 * @property category      - 카테고리
 * @property comments      - 댓글 목록
 * @property commentCount  - 댓글수
 */
export interface PostProps {
  id: string;
  title: string;
  description: string;
  content: string;
  user: UserProps;
  likeCount: number;
  likes: LikeProps[];
  createdAt: string;
  updatedAt: string;
  viewCount: number;
  category: string;
  comments: CommentProps[];
  commentCount: number;
}
/**
 * * 공지사항 정보 인터페이스
 *
 * @property id            - ID
 * @property title         - 제목
 * @property description   - 소개
 * @property createdAt     - 등록일
 * @property updatedAt     - 수정일
 */
export interface NoticeProps {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * * 좋아요 정보 인터페이스
 *
 * @property id            - ID
 * @property user          - 사용자
 * @property post          - 게시물
 */
export interface LikeProps {
  id: string;
  user: UserProps;
  post: PostProps;
}
/**
 * * 카테고리 정보 인터페이스
 *
 * @property id            - ID
 * @property content       - 카테고리명
 * @property useCount      - 사용수
 */
export interface CategoryProps {
  id: string;
  content: string;
  useCount: number;
}
/**
 * * 댓글 정보 인터페이스
 *
 * @property id            - ID
 * @property post          - 댓글의 게시물
 * @property user          - 등록자
 * @property content       - 내용
 * @property createdAt     - 등록일
 * @property updatedAt     - 수정일
 */
export interface CommentProps {
  id: string;
  post: PostProps;
  user: UserProps;
  content: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * * 프로필 사진 정보 인터페이스
 *
 * @property id            - ID
 * @property url           - 이미지 경로
 */
export interface AvatarProps {
  id: string;
  url: string;
}
