'use client'
import { useToast } from "@/components/ui/use-toast";
import { logOut } from "@/lib/moviesAPI";
import { useRouter } from 'next/navigation'

export default function LogOut() {
    const router = useRouter()
    const { toast } = useToast()

    const handelLogout = async () => {
        try {
            const response = await logOut();
            if (response.statusCode != "200") {
                toast({
                    title: "Logout failed",
                    description: "Unable to log out. Please try again.",
                    variant: "destructive",
                });
                return;
            }
            console.log("ok")
            toast({
                title: "Logout successful",
                description: response.message,
                variant: "default",  // Adjusting to success variant for successful logout
            });
            history.replaceState(null, '', '/admin/login-3f72dkwt3');
            router.push('/admin/login-3f72dkwt3');
        } catch (error) {
            toast({
                title: "Logout failed",
                description: "An error occurred during logout.",
                variant: "destructive",
            });
        }
    };
    return (<button type="button" onClick={handelLogout} className="m-2 text-gray-200 py-2 px-3 rounded-md bg-red-600 hover:text-white hover:font-bold">
        Đăng xuất
    </button>)
}