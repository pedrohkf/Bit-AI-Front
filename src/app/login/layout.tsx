import React from "react";

export default async function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <h1>Hello</h1>
            <div>{children}</div>
        </div>
    )
}