export interface IMessage {
  user: string;
  text: string;
}

export interface IMessageProps {
  message: IMessage;
  name: string;
}

export interface IMessagesProps {
  messages: IMessage[];
  name: string;
}
