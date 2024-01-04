import { fetchRidesOfUser } from '@/actions/fetchRidesOfUser';
import { currentUser } from '@clerk/nextjs';
import { Card, CardHeader, Divider, CardBody, CardFooter } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React from 'react';

type Params = {
  params: {
    userId: string;
  };
};

export default async function page({ params: { userId } }: Params) {
  const rides: Ride[] = await fetchRidesOfUser(userId);
  // const rides:Ride = 
  // const router =  useRouter()
    const data = await currentUser()
    if(!(data?.username === "user1" || data?.username === "user2" || data?.username === "user3")) {
        // router.push("/user")
    }
  return (
    <>
      <div>
        <div className='m-4 font-bold text-center text-[50px]'>USER{userId}&apos;s RIDES</div>
        <div className='flex gap-4 p-4 m-4 flex-col items-center'>
          {rides.map((ride, index) => {
            return (
              <>
                <div className='p-4 m-4 bg-blue-600 w-[30dvw] flex rounded-lg'>
                  <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                      <div className="flex justify-between">
                        <p className="text-md mr-60">{ride.date}</p>
                        <p className="text-md bg-green-700 rounded-2xl p-1">{ride.batch}</p>
                      </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                      <p>{ride.passenger.username.toUpperCase()} is travelled from {ride.from} to {ride.to} in {ride.date} at {ride.batch} </p>
                    </CardBody>
                  </Card>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}