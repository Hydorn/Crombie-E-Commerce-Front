export type FetchedProyect = {
  id: string;
  name: string;
  description: string;
  contactEmail: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
};

export type FetchedRating = {
  id: string;
  userName: string;
  userID: string;
  proyectName: string;
  proyectID: string;
  punctuation: number;
  comments: string;
};

export type FetchedUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
};

export type FetchedAvg = {
  average: number;
  votes: number;
};
