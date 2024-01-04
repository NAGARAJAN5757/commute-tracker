import { fetchUsers } from '@/actions/fetchUsers'
import { Card, CardHeader, Divider, CardBody, CardFooter, Link, Button } from '@nextui-org/react';
import { link } from 'fs';
import React from 'react'
type Params = {
	params: {
		userId: string
	}
}
export default async function page({params: {userId}}: Params) {
    const users:User[] = await fetchUsers();
    
  return (
    <div className='h-[100dvh]'>
        {users.map((user, index) => { 
            const url = `/admin/${userId}`
            return (
            <Card className="flex justify-center align-center m-4">
            <CardHeader className="flex gap-3 justify-center">
              <div className="flex flex-col">
                <div className='flex justify-around'>
                <p className="text- m-4">
                    {user.username}
                </p>
                <p className="text- m-4 bg-green-500 rounded-md p-2">
                    {user.role}
                </p>
                </div>
                <p className="text- m-4">
                    {user.phoneNumber}
                </p>
              </div>
            </CardHeader>
            <Divider/>
          </Card>
        )
        })
    }
    </div>
  )
}
