import { currentUser } from "@clerk/nextjs";
export async function getUserData(){
    const user = await currentUser()
    console.log(user?.username)
}
