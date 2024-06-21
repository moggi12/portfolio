import Header from "./header"
import { useRouter } from "next/router"
const hasFooterRoutes = ["/search", "/home", "/packages"]
const noHeaderRoute = ["/order"]
export default function Page({ children }: any) {
    const router = useRouter()
    const noHeader = noHeaderRoute.includes(router.pathname)

    return (
        <>
            <div className="h-screen relative flex flex-col">
                {!noHeader && <Header />}
                <div className="flex-grow overflow-x-hidden overflow-y-scroll rounded-t-2xl relative">
                    {children}
                </div>
            </div>
        </>
    )
}
