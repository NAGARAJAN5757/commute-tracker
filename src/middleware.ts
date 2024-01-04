import { auth, authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: ["/signin","/"],
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"],
  };