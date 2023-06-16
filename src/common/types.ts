export enum UserRole {
  EDITOR = "Editor",
  VIEWER = "Viewer",
}

export type TableData<T> = T & {
  key: string;
};
