export async function fetchVehicles(){
    try {
        const response = await fetch(`http://localhost:3500/vehicles`,{ next: { revalidate: 0 } });
        if(!response.ok) {
            throw new Error("Network response was not ok")
        }
        const data = await response.json();
        // console.log(data);
        return data;
    }
    catch (err){
        console.error("api error",err);
        throw new Error("Failed to fetch data");
    }
    }