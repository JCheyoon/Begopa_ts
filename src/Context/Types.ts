export type UUID = string;
export type DateString = string;

export interface LoginRequest {
  email: string;
  password: string;
}

export interface TokenResponse {
  token: string;
  expiresAt: number;
}

export interface LoginResponse extends TokenResponse {
  email: string;
  id: UUID;
}

export interface Tags {
  frequents: string[];
  others: string[];
}

export interface Ingredient {
  amount: number;
  unit: string;
  material: string;
}

export interface RecipeType {
  id: UUID;
  updatedAt: DateString;
  userId?: UUID;
  public?: boolean;
  name: string;
  photoUrl: string;
  instructions: string;
  tags: string[];
  servings: number;
  cookingTime: string;
  ingredients: Ingredient[];
}
