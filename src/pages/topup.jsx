import { useEffect} from "react";
import { TopupPage } from "../modules/TopupPage";
import { useRouter } from "next/router";


function Topup() {

  const router = useRouter();
  useEffect(() => {
    const user = localStorage.getItem("userId") || "";


    if (user === "") {
      router.push("/signup");
    }
   
  }, []);


  return (
    <div>
      <TopupPage />
    </div>
  );
}

export default Topup;
