
import type { Metadata } from "next";
import APIEndPoints from "@/utils/APIEndPoints";
import getAPIData, {useAPIGet} from "@/services/APIService";
import CarouselCompo from "@/components/carousel/Carousel";
import About from "@/components/about/about";
import HomeProducts from "@/components/home_products/home_products";
import Contact from "@/components/contact/Contact";



export default async function Home() {


    const [carouselList, clientList, ctyPrdList] = await Promise.all([
      getAPIData('get', APIEndPoints.GetCarousel.url).then((res) =>res.status == 200 ? res?.data?.data : null).catch((err) => err ? null : ''),
      getAPIData('get', APIEndPoints.GetClients.url).then((res) =>res.status == 200 ? res?.data?.data : null).catch((err) => err ? null : ''),
      getAPIData('get', APIEndPoints.GetProductList_Category.url).then((res) =>res.status == 200 ? res?.data?.data : null).catch((err) => err ? null : ''),
    ]);

    
  return (
   <>
    <CarouselCompo id="top-portfolio-details" CarouselList={carouselList} />
    <main id="main">
      <About />
      <HomeProducts DataList={ctyPrdList}/> 
      <Contact />
    </main>

   </>
  );
}
