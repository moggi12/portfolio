
import { useRouter } from "next/router"
const backButtonRoutes = ["/movie", "/package", "/history"]
const giftButtonRoutes = ["/home", "/search", "/packages"]
export default function Header() {
    const router = useRouter()
    const hasBackButton = backButtonRoutes.includes(router.pathname)
    const hasGiftButton = giftButtonRoutes.includes(router.pathname)


    return (
        
            <header className="h-14 sticky top-0 left-0 z-50 px-2 flex-none">
               
                
            </header>
    )
}
