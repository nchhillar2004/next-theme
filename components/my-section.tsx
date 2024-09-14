import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
}
export default function Section({ children }: SectionProps) {
    return (
        <section className="h-[85vh] py-5">
            <div className="container">{children}</div>
        </section>
    );
}
