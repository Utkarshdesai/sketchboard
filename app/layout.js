import { Providers } from "./components/Redux/Provider"

export default function RootLayout({ children }) {
    return (
        <Providers>  
          <html lang="en">
          <body> {children}  </body>
          </html>    
        </Providers> 
    )
}


  

