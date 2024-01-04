"use client"
import { fetchUser } from '@/actions/fetchUser';
import UserBtns from '@/components/userBtns';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/dist/server/api-utils';

export default async function Home() {
  const user = await currentUser()
  const username = user?.username;
  if(!username) return ;
  // if(!(username === "1" || username === "2" || username === "3")) router.redirect("/user/1");
  const id = parseInt(username![4])
  const userData = await fetchUser(id);
  
  return (
    <main className="min-h-[80dvh]">
      <div className='flex justify-center items-center min-h-[80dvh]'>
        {/* <UserBtns userData={userData} />  */}
        <div className='bg-rose-500 rounded-md p-4'>WELCOME TO COMMUTE TRACKER APP</div>
      </div>
    </main>
  )
}
