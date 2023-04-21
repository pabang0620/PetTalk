import NavBar from "@/layout/nav/NavBar";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { DefaultLayout } from "@/layout/DefaultLayout";

export type NextPageWithLayout<
  TProps = Record<string, unknown>,
  TInitialProps = TProps
> = NextPage<TProps, TInitialProps> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return getLayout(
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        @font-face {
          font-family: "Pretendard-Regular";
          src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
            format("woff");
          font-weight: 400;
          font-style: normal;
        }
        body {
          font-family: "Pretendard-Regular";
          margin: 0px;
        }
        a {
          text-decoration: none;
          white-space: nowrap;
        }
        li {
          list-style: none;
        }
      `}</style>
    </>
  );
}
