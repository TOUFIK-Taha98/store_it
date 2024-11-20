/* eslint-disable no-unused-vars */

declare interface ActionType {
  icon: string;
  label: string;
  value: string;
}

declare interface DeleteFileProps {
  bucketFileId: string;
  fileId: string;
  path: string;
}

declare type FileType = "audio" | "document" | "image" | "other" | "video";

declare interface FileUploaderProps {
  accountId: string;
  className?: string;
  ownerId: string;
}
declare interface GetFilesProps {
  limit?: number;
  searchText?: string;
  sort?: string;
  types: FileType[];
}
declare interface MobileNavigationProps {
  accountId: string;
  avatar: string;
  email: string;
  fullName: string;
  ownerId: string;
}
declare interface RenameFileProps {
  extension: string;
  fileId: string;
  name: string;
  path: string;
}
declare interface SearchParamProps {
  params?: Promise<SegmentParams>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

declare interface ShareInputProps {
  file: Models.Document;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: (email: string) => void;
}

declare interface SidebarProps {
  avatar: string;
  email: string;
  fullName: string;
}
declare interface ThumbnailProps {
  className?: string;
  extension: string;
  imageClassName?: string;
  type: string;
  url: string;
}

declare interface UpdateFileUsersProps {
  emails: string[];
  fileId: string;
  path: string;
}

declare interface UploadFileProps {
  accountId: string;
  file: File;
  ownerId: string;
  path: string;
}
