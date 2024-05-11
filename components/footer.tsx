import React from "react";

export const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2  text-xs">
        &copy; Hassanjadi. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website: </span> Build with
        React & NextJs (App Router & Server Actions), Typescript, tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
};
