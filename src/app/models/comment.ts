export interface Comment {
  id: number;
  text: string;
  comments?: Comment[];
}
