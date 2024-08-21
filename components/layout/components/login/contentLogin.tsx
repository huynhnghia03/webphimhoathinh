"use client"
import Cookies from 'js-cookie';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { login } from "@/lib/moviesAPI"
import { useRouter } from "next/navigation"

// Update the schema for email and password validation
const FormSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
})

export default function ContentLogin() {
    const { toast } = useToast()
    const router = useRouter()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            const response = await login(data)
            console.log(response)

            if (response.statusCode !== 200) { // Adjust if statusCode is a number
                toast({
                    title: "Login failed",
                    description: response.message,
                    variant: "destructive",
                })
                return
            }
            toast({
                title: "Login successful",
                description: response.message,
                variant: "default",
            })
            // Cookies.set('user_token', response.use_token, { expires: 7, path: '/' });
            router.push('/admin/manage-kkhstyw56')
            return
        } catch (error) {
            console.error('Login failed:', error)
            toast({
                title: "Login failed",
                description: "An error occurred while logging in.",
                variant: "destructive",
            })
        }
    }

    return (
        <div className="min-h-[90vh] flex items-center justify-center bg-transparent">
            <div className="p-8 bg-white flex flex-col gap-5 items-center rounded-lg w-full max-w-md">
                <div className="flex flex-col items-center gap-1">
                    <h2 className="font-bold text-2xl">Welcome Admin</h2>
                    <span className="text-gray-500 text-sm">Welcome back! Please sign in to continue</span>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-[100%] space-y-6">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="Enter your email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Enter your password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button>Log In</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}
