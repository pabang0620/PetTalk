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
        <title>PetTalk</title>
      </Head>
      <main>{children}</main>
    </>
  );
};
