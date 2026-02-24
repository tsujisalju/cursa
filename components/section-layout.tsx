"use client";

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full mx-1 my-2 space-y-2 overflow-hidden">
      {children}
    </div>
  );
}
