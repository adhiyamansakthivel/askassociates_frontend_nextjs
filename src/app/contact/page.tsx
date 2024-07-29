
import type { Metadata } from "next";

import Contact from "@/components/contact/Contact";


export const metadata: Metadata = {
    title: "Contact Us",
    alternates: {
        canonical: 'https://askassociatescbe.com/contact',
    },
    openGraph:{
        title: "Contact Us",
        url: "https://askassociatescbe.com/contact",
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

export default  function CantactUs() {
    return(
        <main id="main">
            <Contact />
        </main>
    )

}