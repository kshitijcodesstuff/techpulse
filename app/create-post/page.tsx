import CreatePostForm from "@/components/CreatePostForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/configs/auth/authOptions";
import { redirect } from "next/navigation";
export default async function CreatePost(){
    const session = await getServerSession(authOptions);

    if (!session) {
      redirect("/sign-in");
    }
  
    return <CreatePostForm />;
}