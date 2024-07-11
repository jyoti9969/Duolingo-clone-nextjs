import { Footer } from "./footer";
import { Header } from "./header";
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
type Props={
    children:React.ReactNode
};
const MarketingLayout=({children}:Props)=>{
return(
    <ClerkProvider>
    <html lang='en'>
      <body>
        {/* <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn> */}
        <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col justify-center items-center">
        {children}
            </main>
            <Footer />
      
      </div>
      </body>
    </html>
  </ClerkProvider>
   
        
           
)
}
export default MarketingLayout