import Image from 'next/image';
import { useRouter } from 'next/router';


interface PropsList {
  tabname: string;
  routername: string;
}
const Tab = (props: PropsList) => {
  const { tabname, routername } = props;
  const router = useRouter();

  return (
    <>
      {router.asPath == routername ? (
        <div>
          <div className="tabBox tabActive">
            <Image
              src="/images/pawprint.png"
              alt="pawprint"
              width={25}
              height={25}
            />
            <div className="tabText ">{tabname}</div>
            <Image
              src="/images/pawprint.png"
              alt="pawprint"
              width={25}
              height={25}
            />
          </div>
        </div>
      ) : (
        <div className="tabBox tabText tabInactive">{tabname}</div>
      )}

      <style jsx>{`
        .tabBox {
          display: flex;
          flex-direction: row;
          align-items: center;
          border-radius: 10px;
          padding: 7px;
          margin-right: 30px !important;
        }
        .tabInactive {
          background-color: #f7e3c4;
          padding-left: 15px;
          padding-right: 15px;
        }
        .tabActive {
          background-color: #f4d6a8;
          font-weight: 600;
        }
        .tabText {
          margin-left: 8px;
          margin-right: 8px;
          line-height: 25px;
        }
      `}</style>
    </>
  );
};

export default Tab;
