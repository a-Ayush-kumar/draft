'use client'
import {SessionProvider} from "next-auth/react"
import UserButton from "@/components/ui/userButton"

const Profile = () => {
  return(
    <div>
      <SessionProvider>
        <UserButton/>
      </SessionProvider>
    </div>
  )
}

export default Profile;