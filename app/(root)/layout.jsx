import Header from "@/components/shared/Header";

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex-1 w-full">
        {children}
      </div>
    </div>
  );
}
