

import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from "next/navigation";

import APIEndPoints from "@/utils/APIEndPoints";
import getAPIData, {useAPIGet} from "@/services/APIService";
import ProductDeailComponent from "@/components/productDetailComponent/ProductDetailComponent";



async function dataProduct(slug: string)
{

  const [apiProductDetails] = await Promise.all([
    getAPIData('get', APIEndPoints.GetAllProducts.url +slug).then((res) =>res.status == 200 ? res?.data?.data : notFound())
    .catch((err) => err ? notFound() : ''),
  ]);


   return apiProductDetails;


}


type Props = {
  params: {
    slug:string; 
  }
}


export async function generateMetadata(
  { params,  }: Props,
): Promise<Metadata> {

  const productDet: any = await dataProduct(params.slug)
  const metaTag = productDet?.tags.length >0 && productDet?.tags != null ? productDet?.tags?.toString() : '';
  const metaTitle = productDet?.title
  const metaKeyword = productDet?.tags.length >0 ? `${productDet?.title}, ${metaTag?.replace(/,/g, ", ")}, ASK Associates Coimbatore, ask associates Coimbatore, ask associates palladam, ask associates cbe, askassociatescbe.com, construction material supplier coimbatore, construction material supplier palladam, redymix coimbatore, readymix palladam, sand in coimbatore, sand in palladam, cements in coimbatore, cements in palladam, Manufacturer, Wholesaler, Trader, Retailer, Distributor, jally stones, strong construction , strong building, crushed stones in coimbatore ,palladam, all brand cements supplier in coimbatore, all brand cement supplier in palladam, best construction material supplier coimbatore palladam, construction coimbatore, dream home coimbatore, house construction coimbatore, appartment materials coimbatore, interior desinger coimbatore, builders in coimbatore, best bricks in coimbatore, renacon` : `${productDet?.title}, ASK Associates Coimbatore, ask associates Coimbatore, ask associates palladam, ask associates cbe, askassociatescbe.com, construction material supplier coimbatore, construction material supplier palladam, redymix coimbatore, readymix palladam, sand in coimbatore, sand in palladam, cements in coimbatore, cements in palladam, Manufacturer, Wholesaler, Trader, Retailer, Distributor, jally stones, strong construction , strong building, crushed stones in coimbatore ,palladam, all brand cements supplier in coimbatore, all brand cement supplier in palladam, best construction material supplier coimbatore palladam, construction coimbatore, dream home coimbatore, house construction coimbatore, appartment materials coimbatore, interior desinger coimbatore, builders in coimbatore, best bricks in coimbatore, renacon`;
  const metaUrl = `https://askassociatescbe.com/product/${params.slug}`
  return {
    title: metaTitle,
    keywords:metaKeyword,
    alternates: {
        canonical: metaUrl,
    },
    openGraph:{
        title: metaTitle,
        url: metaUrl,
        siteName:"askassociatescbe",
        images: [
        {
            url: productDet?.images?.[0]?.productImage, // Must be an absolute URL
            width: 800,
            height: 600,
        },
        ],
    }
    
  }
}





export default async function productDetails( {params,} :
    {params:{
      slug:string; 
    }} 
) {

  const productDet: any = await dataProduct(params.slug)

      
        

      
    return(
        <>
         <section id="productDetails" className="sections-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-header productDetails-header">
                <h2> Product Details</h2>
              </div>
              <ProductDeailComponent ProductDetailData={productDet} />
            </div>
          </section>

        </>
    )

}