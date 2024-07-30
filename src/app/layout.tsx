
import type { Metadata } from "next";
import Script from 'next/script'
import WorkClientComponent from "@/clientComponent/WorkClientComponent";
import AosClientComponent from "@/clientComponent/AosClientComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactQueryProvider } from "@/clientComponent/QueryClientComponent";
import { DataProvider } from "@/context/DataContext";


import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";






// const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title:{
    default:"ASK Associates Coimbatore & Palladam | askassociatescbe.com",
    template:"%s | ASK Associates Coimbatore & Palladam | askassociatescbe.com",
  },
   
  description: "ASK Associates or ASK Associates Coimbatore and Palladam or ask associates cbe is a Construction Material Supplier such as Fly Ash Bricks, AAC Blocks, River Sand, Sand, Crushed Stones, Cements, Redymix Concretes and All Brand Cements. Manufacturer | Wholesaler | Trader | Retailer | Distributor, ASK Associates established in 2020. We are one of the leading distributors and  located in coimbatore and we are deliver our products and services in all over coimbatore and palladam.",
  keywords: 'ASK Associates Coimbatore, ask associates Coimbatore, ask associates palladam, ask associates cbe, askassociatescbe.com, construction material supplier coimbatore, construction material supplier palladam, redymix coimbatore, readymix palladam, sand in coimbatore, sand in palladam, cements in coimbatore, cements in palladam, Manufacturer, Wholesaler, Trader, Retailer, Distributor, jally stones, strong construction , strong building, crushed stones in coimbatore ,palladam, all brand cements supplier in coimbatore, all brand cement supplier in palladam, best construction material supplier coimbatore palladam, construction coimbatore, dream home coimbatore, house construction coimbatore, appartment materials coimbatore, interior desinger coimbatore, builders in coimbatore, best bricks in coimbatore, renacon',
  alternates: {
    canonical: 'https://askassociatescbe.com',
  },
  openGraph:{
    title:{
      default:"ASK Associates Coimbatore & Palladam | askassociatescbe.com",
      template:"%s | ASK Associates Coimbatore & Palladam | askassociatescbe.com",
    },
    description: "ASK Associates or ASK Associates Coimbatore and Palladam or ask associates cbe is a Construction Material Supplier such as Fly Ash Bricks, AAC Blocks, River Sand, Sand, Crushed Stones, Cements, Redymix Concretes and All Brand Cements. Manufacturer | Wholesaler | Trader | Retailer | Distributor",
    type:"website",
    url: "https://askassociatescbe.com/",
    siteName:"askassociatescbe",
    images: [
      {
        url: 'https://askassociatescbe.com/assets/images/logo.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en">

      <head>

             <Script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=6690cf0a595beb00197df933&product=sop' 
            async ></Script>

      </head>
      
             
       
      <body>
        <WorkClientComponent>
          <AosClientComponent >
            <ReactQueryProvider>
              <DataProvider>
                <Header />
                  {children}
                <Footer />
              </DataProvider>
            </ReactQueryProvider>
          </AosClientComponent>
        </WorkClientComponent>
      </body>
    </html>
  );
}
