import React, { ReactNode } from "react";
import Head from "next/head";
import NavBar from "./nav/NavBar";

type DefaultLayoutProps = { children: ReactNode };

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <NavBar></NavBar>
      <Head>
        <title>PetTalk - 반려동물</title>
      </Head>

      <main>{children}</main>
    </>
  );
};
