import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from "next/navigation";

import APIEndPoints from "@/utils/APIEndPoints";
import getAPIData, {useAPIGet} from "@/services/APIService";
import ProductComponent from "@/components/products/ProductComponent";




async function dataCategory(slug: string)
{

  const [apiCategoryProduct] = await Promise.all([
    getAPIData('get', APIEndPoints.GetProductList_Category?.url + slug) .then((res) =>res.status == 200 ? res?.data?.data?.[0] : notFound()) .catch((err) => err ? notFound() : ''),
   ]);

   return apiCategoryProduct;


}


type Props = {
  params: {
    slug:string; 
  }
}


 
export async function generateMetadata(
  { params,  }: Props,
): Promise<Metadata> {

  const categoryDet: any = await dataCategory(params.slug)
  const metaTitle = categoryDet?.name + ' | Category'
  const metaUrl = `https://askassociatescbe.com/category/${params.slug}`
  return {
    title: metaTitle,
    keywords: `${categoryDet?.name}, ASK Associates Coimbatore, ask associates Coimbatore, ask associates palladam, ask associates cbe, askassociatescbe.com, construction material supplier coimbatore, construction material supplier palladam, redymix coimbatore, readymix palladam, sand in coimbatore, sand in palladam, cements in coimbatore, cements in palladam, Manufacturer, Wholesaler, Trader, Retailer, Distributor, jally stones, strong construction , strong building, crushed stones in coimbatore ,palladam, all brand cements supplier in coimbatore, all brand cement supplier in palladam, best construction material supplier coimbatore palladam, construction coimbatore, dream home coimbatore, house construction coimbatore, appartment materials coimbatore, interior desinger coimbatore, builders in coimbatore, best bricks in coimbatore, renacon`,
    alternates: {
        canonical: metaUrl,
    },
    openGraph:{
        title: metaTitle,
        url: metaUrl,
        siteName:"askassociatescbe",
        images: [
        {
            url: 'https://askassociatescbe.com/assets/images/logo.png', // Must be an absolute URL
            width: 800,
            height: 600,
        },
        ],
    }
    
  }
}


export default async function categoryProduct(  { params,  }: Props) {


  const categoryDet: any = await dataCategory(params.slug)
 

  
    return(
        <>
         
         <section id="product" className="portfolio sections-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-header products-header">
                    <h1>{categoryDet?.name} </h1>
                </div>
              < ProductComponent ProductList={categoryDet?.products} />
            </div>
          </section>

        </>
    )
} 


