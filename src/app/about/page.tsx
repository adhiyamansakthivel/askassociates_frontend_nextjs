import type { Metadata } from "next";
import About from "@/components/about/about";

export const metadata: Metadata = {
    title: "About Us",
    alternates: {
        canonical: 'https://askassociatescbe.com/about',
    },
    openGraph:{
        title: "About Us",
        url: "https://askassociatescbe.com/about",
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
  

export default  function AboutUs() {
    return(
        <main id="main">
            <About />
        </main>
    )

}