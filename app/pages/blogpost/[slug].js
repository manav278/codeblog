import React from "react";
import { useRouter } from "next/router";
function Slug() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <h1 className="text-light"> Title of the page : {slug}</h1>
    </div>
  );
}

export default Slug;
