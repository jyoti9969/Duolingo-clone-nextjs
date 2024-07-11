import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";
import { ClerkProvider } from "@clerk/nextjs";

type Props={
    children:React.ReactNode;
}
const MainLayout=({children}:Props)=>{
return(
    <>
    <ClerkProvider>
    <MobileHeader />
    <Sidebar className="hidden lg:flex" />
    <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">  
        <div className="max-w-[1056px] mx-6 pt-6 h-full">
        {children}
    </div>
    </main>
    </ClerkProvider>

   
    </>
   
)
}
export default MainLayout