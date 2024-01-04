"use client"
import React, { useEffect, useState } from "react";
import { fetchVehicles } from '@/actions/fetchVehicles';
import { Input } from '@nextui-org/react'
import {Select, SelectItem} from "@nextui-org/react";
import { getUserData } from "@/utils/getUser";
import { getAuth } from "@clerk/nextjs/server";
import { currentUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


export default async function page() {
//     const [vehicles, setVehicles] = useState<Vehicle[] | null>(null)
//   const [isLoading, setLoading] = useState(true)
 
//   useEffect(() => {
//     const data = fetchVehicles()
//       .then((data) => {
//         setVehicles(data)
//         setLoading(false)
//       })
//   }, [])
 
//   if (isLoading) return <p>Loading...</p>
//   if (!vehicles) return <p>No data</p>
    const router =  useRouter()
    const data = await currentUser()
    if(!(data?.username === "user1" || data?.username === "user2" || data?.username === "user3")) {
        router.push("/user")
    }
  return (
    <div className='min-h-[80%]'>
        <Input type="date" label="Date" placeholder="Enter date" />
        <Input type="time" label="Time" placeholder="Enter date" />
        {/* <Select
      items={vehicles!}
      label="Favorite Animal"
      placeholder="Select an animal"
      className="max-w-xs"
      >
      {(vehicles) => <SelectItem key={vehicles.id}>{vehicles.name}</SelectItem>}
    </Select> */}
    </div>
  );
}

