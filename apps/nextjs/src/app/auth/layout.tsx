import { type ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-12 lg:py-0">
      {children}
    </section>
  );
};

export default AuthLayout;
