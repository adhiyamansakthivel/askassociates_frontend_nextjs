import { MetadataRoute } from 'next'
import APIEndPoints from "@/utils/APIEndPoints";
import getAPIData from "@/services/APIService";

const Website_url = "https://askassociatescbe.com";


type changeFrequency = 
| 'always'
| 'hourly'
| 'daily'
| 'weekly'
| 'monthly'
| 'yearly'
| 'never'




export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const changeFrequency = 'daily' as changeFrequency


    const [apiCategory, apiProducts] = await Promise.all([
        getAPIData('get', APIEndPoints.GetCategory.url),
        getAPIData('get', APIEndPoints.GetAllProducts.url),
    ]);

    const category  = apiCategory?.data?.data?.map((item:any)=>({
        url: `${Website_url}/category/${item?.slug_url}`,
        lastModified: new Date().toISOString(),
        changeFrequency,
        priority: 1,
    }))


    const products  = apiProducts?.data?.data?.map((item:any)=>({
        url: `${Website_url}/product/${item?.slug_url}`,
        lastModified: new Date().toISOString(),
        changeFrequency,
        priority: 1,
    }))
    
 

    const routes = ['', '/about', '/contact', '/products'].map((route)=>({
        url: `${Website_url}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency,
        priority: 1,
    }))
 
 
 
 
 
    return [
        ...routes,
        ...category,
        ...products
  ]
}