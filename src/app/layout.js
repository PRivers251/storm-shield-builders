import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        rel="stylesheet"
        />
      </head>
     <body className={inter.className}>
     <main className="flex min-h-screen flex-col p-5">
      <Header />
      {children}
      <Footer />
      </main>
      </body> 
    </html>
  );
}
