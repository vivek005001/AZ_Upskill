// app/layout.tsx
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Algozenith",
  description: "Take your CP and DSA skills to the zenith",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.className}>
      <body>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
