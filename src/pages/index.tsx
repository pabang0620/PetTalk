import MainDetail from "@/detail/main/MainDetail";

export default function Home() {
  return (
    <>
      <div className="main-page">
        <MainDetail />
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
}
