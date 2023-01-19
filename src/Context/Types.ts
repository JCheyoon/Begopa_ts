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
  isPublic?: boolean;
  name: string;
  photoUrl: string;
  instructions: string;
  tags: string[];
  servings: number;
  cookingTime: string;
  ingredients: Ingredient[];
  isMyRecipe?: boolean;
}

export interface RecentRecipeType {
  id: UUID;
  isPublic?: boolean;
  name: string;
  photoUrl: string;
  tags: string[];
  cookingTime: string;
  isMyRecipe: boolean | undefined;
}

export interface MyRecipeType {
  name: string;
  photoUrl: string;
  cookingTime: string;
  tags: string[];
  id: UUID;
  updatedAt: string;
  instructions: string;
  servings: number;
  ingredients: Ingredient[];
}
