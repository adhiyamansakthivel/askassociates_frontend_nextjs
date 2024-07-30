import { MetadataRoute } from 'next'

const Website_url = "https://askassociatescbe.com";


export default function robots(): MetadataRoute.Robots {
    return{
        rules:[
            {
                userAgent: "*",
                allow: "/",
                disallow:"",
            }

        ],
        sitemap: `${Website_url}/sitemap.xml`
    }
}