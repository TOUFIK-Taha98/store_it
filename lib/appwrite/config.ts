export const appwriteConfig = {
  bucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET!,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
  endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
  filesCollectionId: process.env.NEXT_PUBLIC_APPWRITE_FILES_COLLECTION!,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT!,
  secretKey: process.env.NEXT_APPWRITE_KEY!,
  usersCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION!,
};
