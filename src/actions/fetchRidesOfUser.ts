import { fetchRides } from "./fetchRides";

export async function fetchRidesOfUser(id : string){
    try {
        const rides:Promise<Ride[]>=  await fetchRides()
        const userRides = (await rides).filter(ride => ride.passenger.id === id)
        
        return userRides;
    }
    catch (err){
        console.error("api error",err);
        throw new Error("Failed to fetch data");
    }
    }