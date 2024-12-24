import type { ReactNode } from "react";

export const Description = ({ children }: { children: ReactNode }) => {
    return <p className="text-base py-3">{children}</p>;
};
