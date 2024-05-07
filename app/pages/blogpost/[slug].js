import React from 'react'
import {useRouter} from "next/router"
function Slug() {
    const router=useRouter();
    const {slug}=router.query;
  return (
    <div>
      <h1 className='text-light'>{slug}</h1>
    </div>
  )
}

export default Slug
