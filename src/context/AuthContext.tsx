import { createContext, useContext, useState, ReactNode } from "react";
import { jwtDecode } from "jwt-decode";

type AuthContextType = {
  isAuthenticated: boolean;
  user: { name: string } | null; // Puedes extender esta información según tu backend
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ name: string } | null>(null);

  const login = (token: string) => {
    localStorage.setItem("authToken", token);
    const decodedToken: any = jwtDecode(token);
    setUser({ name: decodedToken.Nombres });
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
