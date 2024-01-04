"use client"
import { fetchUser } from '@/actions/fetchUser'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function userBtns({userData}:{userData:User}) {
    
  const router = useRouter();  
  return (
    <div className='flex p-8 justify-center items-center bg-gray-500 rounded-lg'>
      
          {(userData.role === "driver")  && <Button color='primary' className='m-6' onClick={() => router.push(`/driver`)}>Driver</Button> }
          {(userData.role === "admin")  && <Button color='primary' className='m-6' onClick={() => router.push(`/admin`)}>Admin</Button> }
          <Button color='secondary' className='m-6' onClick={() => router.push(`/user/${userData.username}`)}>User</Button>
    </div>
  )
}
