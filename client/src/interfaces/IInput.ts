import { THandleEnter, TSendMessage } from '../interfaces/IChat';

export interface IInput {
  message: string;
  setMessage: (arg0: string) => void;
  handleEnter: (e: THandleEnter) => void;
  sendMessage: (e: TSendMessage) => void;
}
