export type UUID = string;
export type Date = string;

export type TokenResponse = {
  token: string;
  expiresAt: number;
};

export interface LoginResponse extends TokenResponse {
  email: string;
  id: UUID;
}

export type Ingredient = {
  amount: number;
  unit: string;
  material: string;
};

export interface Recipe {
  id: UUID;
  updatedAt: Date;
  userId: UUID;
  public: boolean;
  name: string;
  photoUrl: string;
  instructions: string;
  tags: string[];
  servings: number;
  cookingTime: string;
  ingredients: Ingredient[];
}
