export const navItems = [
  {
    icon: "/assets/icons/dashboard.svg",
    name: "Dashboard",
    url: "/",
  },
  {
    icon: "/assets/icons/documents.svg",
    name: "Documents",
    url: "/documents",
  },
  {
    icon: "/assets/icons/images.svg",
    name: "Images",
    url: "/images",
  },
  {
    icon: "/assets/icons/video.svg",
    name: "Media",
    url: "/media",
  },
  {
    icon: "/assets/icons/others.svg",
    name: "Others",
    url: "/others",
  },
];

export const actionsDropdownItems = [
  {
    icon: "/assets/icons/edit.svg",
    label: "Rename",
    value: "rename",
  },
  {
    icon: "/assets/icons/info.svg",
    label: "Details",
    value: "details",
  },
  {
    icon: "/assets/icons/share.svg",
    label: "Share",
    value: "share",
  },
  {
    icon: "/assets/icons/download.svg",
    label: "Download",
    value: "download",
  },
  {
    icon: "/assets/icons/delete.svg",
    label: "Delete",
    value: "delete",
  },
];

export const sortTypes = [
  {
    label: "Date created (newest)",
    value: "$createdAt-desc",
  },
  {
    label: "Created Date (oldest)",
    value: "$createdAt-asc",
  },
  {
    label: "Name (A-Z)",
    value: "name-asc",
  },
  {
    label: "Name (Z-A)",
    value: "name-desc",
  },
  {
    label: "Size (Highest)",
    value: "size-desc",
  },
  {
    label: "Size (Lowest)",
    value: "size-asc",
  },
];

export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
