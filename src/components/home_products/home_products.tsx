'use client'

import React, {useContext, useState } from 'react';
import Isotope from "isotope-layout";
import './Home_products.scss';
import Link from 'next/link';
import { DataContext } from "../../context/DataContext";



const HomeProducts = ({ DataList  }: {DataList: string[]}) => {
  const [selectedCategory, setSelectedCategory] = useState<any | null>('All');
   const businessDetails:any = useContext(DataContext);
   const whatsappNum:any = businessDetails?.whatsappUs;





  return (
    <section id="portfolio" className="portfolio sections-bg">
        <div className="container" data-aos="fade-up">
            <div className="section-header">
                <h2>Our Products</h2>

            </div>
            <div className="portfolio-isotope">
                <div>
                    <ul className="portfolio-flters">
                        <li
                            onClick={() => setSelectedCategory('All')}
                            className={selectedCategory === 'All' ? 'filter-active' : ''}
                        >
                            All
                        </li>
                        {
                          DataList?.map((item:any) => (
                          <li
                              key={item?.id}
                              onClick={() => setSelectedCategory(item?.name)}
                              className={selectedCategory === item?.name ? 'filter-active' : ''}
                          >
                              {item?.name}
                          </li>
                          ))
                        }
                    </ul>
                </div>

        
                <div className="row gy-4 portfolio-container filter-container">
                    
                {selectedCategory === 'All' ? (
                //products for all
                DataList?.map((item:any) => {
                   return  item?.products?.slice(0,6).map((products:any) => (
                    
                        <div className={"col-xl-3 col-md-6 filter-item filter-" + products?.slug_url}
                        key={products?.id}>
                          <div className="portfolio-wrap">
                       
                            
                          <a
                           
                            data-gallery="portfolio-gallery-app"
                            className="glightbox"
                          >
                            <img
                              src={
                                products?.images[0].productImage ||
                                "https://source.unsplash.com/pWkk7iiCoDM/400x300"
                              }
                              className="img-fluid"
                              alt="products"
                            />
                          </a>
                          <div className="portfolio-info">
                            <h4>
                              <a
                               
                                title="More Details"
                              >
                                {products?.title}
                              </a>
                            </h4>
                            {products?.brand?.name && (
                              <p><strong>Brand :</strong> {products?.brand?.name}</p>
                            )}
                            {products?.category?.name && (
                              <p><strong>Category :</strong> {item?.name}</p>
                            )}
                            {products?.subcategory?.name && (
                              <p><strong>SubCategory:</strong> {products?.subcategory?.name}</p>
                            )}
                           
                          </div>
                          { whatsappNum?.whatsappnumber &&
                                <div className="portfolio-footer" style={{backgroundColor:"#075e54"}}>
                                  <a  
                                    href={whatsappNum?.whatsappUrl +`I’m interested in the *${products?.title}*`+`%0aCategory: ${products?.category?.name}`+`%0aLink: ${process.env.NEXT_PUBLIC_WEBSITE_URL_PRODUCT+products?.slug_url}`+"%0aCould you please provide more details?"}                        
                                    className="readmore stretched-link cursor"
                                    style={{color:'white'}}
                                  >
                                  <i className="bi bi-whatsapp"></i> Whatsapp Inquiry 
                                  </a>
                                </div>
                          }
                          
                          <div className="portfolio-footer" >
                            <a
                              href={`/product/`+products.slug_url}
                              className="readmore stretched-link cursor"
                              style={{color:'red', fontWeight:'bold'}}
                            >
                             View More <i className="bi bi-arrow-right"></i>
                            </a>
                           
                          </div>
                         
                          </div>
                        </div>
                        

                  
                    ))
                    
                })
                //products end for all
                
                ) : (
                    DataList?.filter((item:any) => item?.name === selectedCategory).map((item:any) => {
                        return  item?.products?.slice(0,2).map((products:any) => (
                                <div className={"col-xl-3 col-md-6 filter-item filter-" + products?.slug_url}
                                key={products?.id}>
                                <div className="portfolio-wrap">
                                
                               
                                <a
                                    
                                    data-gallery="portfolio-gallery-app"
                                    className="glightbox"
                                >
                                    <img
                                    src={
                                        products?.images[0].productImage ||
                                        "https://source.unsplash.com/pWkk7iiCoDM/400x300"
                                    }
                                    className="img-fluid"
                                    alt="products"
                                    />
                                </a>
                                <div className="portfolio-info">
                                    <h4>
                                    <a
                                        
                                        title="More Details"
                                    >
                                        {products?.title}
                                    </a>
                                    </h4>
                                    {products?.brand?.name && (
                                    <p><strong>Brand :</strong> {products?.brand?.name}</p>
                                    )}
                                    {products?.category?.name && (
                                    <p><strong>Category :</strong> {item?.name}</p>
                                    )}
                                    {products?.subcategory?.name && (
                                    <p><strong>SubCategory:</strong> {products?.subcategory?.name}</p>
                                    )}
                                    
                                </div>

                                { whatsappNum?.whatsappnumber &&
                                <div className="portfolio-footer" style={{backgroundColor:"#075e54"}}>
                                  <a
                                                        
                                    href={whatsappNum?.whatsappUrl +`I’m interested in the *${products?.title}*`+`%0aCategory: ${products?.category?.name}`+`%0aLink: ${process.env.NEXT_PUBLIC_WEBSITE_URL_PRODUCT+products?.slug_url}`+"%0aCould you please provide more details?"}                        
                                    className="readmore stretched-link cursor"
                                    style={{color:'white'}}
                                  >
                                  <i className="bi bi-whatsapp"></i> Whatsapp Inquiry 
                                  </a>
                                </div>
                                }
                                
                                <div className="portfolio-footer" >
                                <a
                                    href={`/product/`+products.slug_url}
                                    className="readmore stretched-link cursor"
                                    style={{color:'red', fontWeight:'bold'}}
                                  >
                                  View More <i className="bi bi-arrow-right"></i>
                                  </a>
                                    
                                </div>
                               
                            
                                </div>
                                </div>
                            
                         ))
                         
                     })
                )}
                </div>

                <div className="col-xl-12 col-md-12 mt-3">
                    <div className="portfolio-wrap filter-container">
                      <div className="portfolio-footer filter-item">
                        <a href={'/products'}  
                             className="readmore stretched-link" style={{color:'red', fontWeight:'bold'}}> 
                          View All<i className="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
    </section>
  );
};

export default HomeProducts;
