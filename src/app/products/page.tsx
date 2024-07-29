
import type { Metadata } from "next";
import APIEndPoints from "@/utils/APIEndPoints";
import getAPIData, {useAPIGet} from "@/services/APIService";
import ProductComponent from "@/components/products/ProductComponent";
import { notFound } from "next/navigation";



export const metadata: Metadata = {
  title: "All Products",
  alternates: {
      canonical: 'https://askassociatescbe.com/products',
  },
  openGraph:{
      title: "All Products",
      url: "https://askassociatescbe.com/products",
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


export default async function productDet() {
      
    const [apiProductDetails] = await Promise.all([
      getAPIData('get', APIEndPoints.GetAllProducts.url) .then((res) =>res.status == 200 ? res?.data?.data : notFound())
      .catch((err) => err ? notFound() : ''),
    ]);
    

      
    return(
        <>
           <section id="product" className="portfolio sections-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-header products-header">
                    <h1>Products</h1>
                </div>
              < ProductComponent ProductList={apiProductDetails} />
            </div>
          </section>
          
        
        </>
    )

}