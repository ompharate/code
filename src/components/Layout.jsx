import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex">
        <Sidebar />
        <main className="flex-1 bg-gray-50">{children}</main>
      </div>
      <Footer />
    </div>
  );
}