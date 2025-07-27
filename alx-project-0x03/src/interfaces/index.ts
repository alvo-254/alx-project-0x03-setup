// Button props
export interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  buttonSize?: "small" | "medium" | "large";
  action?: () => void;
}

// Layout props
export interface LayoutProps {
  children: React.ReactNode;
}

// Page Route Props
export interface PageRouteProps {
  pageRoute: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string; // <-- Add this
}

export interface Company {
  name: string;
  catchPhrase: string; // <-- Add this
}
// src/interfaces/User.ts
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}