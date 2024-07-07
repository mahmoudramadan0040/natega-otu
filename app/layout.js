'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBarComponent from "./Components/NavigationBarComponent";
import ProvidersUIComponent from "./Components/ProvidersUIComponent";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DataProvider } from "./Components/DataProviderComponent";
const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();
export default function RootLayout({ children }) {
  
  return (
    <html lang="en"  dir="rtl" className="dark" >
      <body className={inter.className}>
        <DataProvider>
            <QueryClientProvider client={queryClient}>

                <ProvidersUIComponent themeProps={{ attribute: "class", defaultTheme: "dark" }}>
                  
                      <NavigationBarComponent></NavigationBarComponent>
                      {children}
                  
                </ProvidersUIComponent>
        
            </QueryClientProvider>
      </DataProvider> 
      </body>
      
    </html>
  );
}
