export interface IChat {
  location: Location;
}

export interface IUser {
  id: string;
  name: string;
  room: string;
}

export interface IRoomData {
  room: string;
  users: IUser[];
}

export type THandleEnter = React.KeyboardEvent<HTMLInputElement>;
export type TSendMessage = THandleEnter | React.MouseEvent<HTMLButtonElement>;
