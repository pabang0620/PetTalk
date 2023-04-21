import React, { ReactNode } from "react";
import Head from "next/head";
import NavBar from "./nav/NavBar";
import MainDetail from "@/detail/main/MainDetail";

type DefaultLayoutProps = { children: ReactNode };

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <NavBar></NavBar>
      <Head>
        <title>PetTalk - 반려동물</title>
      </Head>
      <div className="main-page">
        <MainDetail />
        <main>{children}</main>
      </div>
      <style jsx>{`
        .main-page {
          display: flex;
          flex-direction: column;
          margin-top: 40px;
        }
      `}</style>
    </>
  );
};
