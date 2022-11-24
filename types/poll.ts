export type Poll = {
  _id: string;
  title: string;
  image: string;
  description: string;
  selections: Selection[];
};

export type Selection = {
  count: number;
  id: string;
  name: string;
};
