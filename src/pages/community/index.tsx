import { useRouter } from "next/router";
import CommunityDetail from '@/detail/community/CommunityDetail';


const Community = () => {
  const router = useRouter();
  const { pid } = router.query;

  // return <p>Post: {pid}</p>;
  
  return (
    <>
      <CommunityDetail />
    </>
  );
};

export default Community;
