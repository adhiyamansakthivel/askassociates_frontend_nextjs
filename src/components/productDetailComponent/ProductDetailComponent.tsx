'use client';
import React from 'react';
import Parser from "html-react-parser";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import './productDetails.scss';
import APIEndPoints from "../../utils/APIEndPoints";
import { useAPIGet } from "../../services/APIService";
import Link from 'next/link';


const ProductDeailCom = ({ ProductDetailData }: {ProductDetailData:any}) => {
    const productDet:any = ProductDetailData; 

    const relatedProductLink:string =  `${APIEndPoints?.GetRelatedProducts?.url}/${productDet?.slug_url}/${productDet?.category?.slug_url}`

    const handleImageClick = (ImageUrl: string) => {
        let container = document.getElementById("main-image") as HTMLImageElement;
        container.src = ImageUrl;
    };

    const apiRelatedProductList:any = useAPIGet(
      "relatedProductsList",
      "relatedProductsList",
      `${relatedProductLink}`,
      {
        enabled: !!relatedProductLink,
        refetchOnWindowFocus: false,
        staleTime: 0,
      }
    );
    

    const relatedProductList:any = apiRelatedProductList?.data?.data?.data;

    

    return(
      <>
        <div className="row d-flex justify-content-center">
            
            <div className="col-md-12">
              <div className="card">
                <div className="row">
                  <div className="col-md-6">
                    <div className="images p-3">
                      <div className="text-center p-4">
                        <img
                          id="main-image"
                          onClick={(e) => handleImageClick(productDet?.images?.[0]?.productImage)}
                          src={productDet?.images?.[0]?.productImage}
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: '100%', height: 'auto', maxHeight:'400px' }} 
                          alt={productDet?.title}
                        />
                      </div>
    
    
                      <div className="thumbnail text-center">
                           
                        {productDet?.images?.slice(0,6).map(
                          (item:any, index:number) => (
                            
                              <img
                                key={index+1}
                                src={item?.productImage}
                                width="70"
                                height="70"
                                className="cursor active"
                                style={{ marginTop: '5px', marginBottom: '5px', marginRight: '5px',  marginLeft: '5px'}}
                                alt= {productDet?.title}
                                onClick={(e) => handleImageClick(item?.productImage)}
                              />
                           
                           
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="product p-4">
                      <div className="mt-4 mb-3">
                        <h1 style={{fontSize:'150%'}} className="text-uppercase">
                          {productDet?.title}
                        </h1>
                        <hr/>
                      </div>
    
                  
                      <Container>
                    
                        
    
                        {productDet?.availablity && (
                          <Row xs="auto">
                            <Col><h6>Availablity: </h6></Col>
                            <Col><span style={{fontSize:'larage'}}>{productDet?.availablity}</span></Col>
                          </Row>
                        )}
    
    
                        {productDet?.brand?.name && (
                          <Row xs="auto">
                            <Col><h6>Brand:</h6></Col>
                            <Col>{productDet?.brand?.name}</Col>
                          </Row>
                        )}
    
                        {productDet?.category?.name && (
                          <Row xs="auto">
                            <Col><h6>Category:</h6></Col>
                            <Col>{productDet?.category?.name}</Col>
                          </Row>
                        )}
    
                        {productDet?.subcategory?.name && (
                          <Row xs="auto">
                              <Col><h6>Sub Category:</h6></Col>
                              <Col>{productDet?.subcategory?.name}</Col>
                          </Row>
                        )}
                        <br/>
                        {productDet?.price && (
                          <>
                           <span style={{fontSize:'25px',  }}>₹{productDet?.price}</span>{productDet?.per != null ? <span style={{fontSize:'small'}}> /{productDet?.per} </span> : null }
                            </>
                        )}
                      </Container>

                     
                    </div>
                   
                  </div>
                  
                </div>
              </div>
                
              <div className="card">
                <div className="product p-4">
                  <div className="mt-2">
                    <h3 className="text-uppercase">Description</h3>
                    <hr/>
                  </div>
                  <div className="p-2">
                    {productDet?.description &&
                      Parser(productDet?.description)}
                  </div>
                </div>
              </div>
                { productDet?.tags?.length > 0 && (
                <Card>
                    <Card.Header>Tags</Card.Header>
                    <Card.Body>
                    <Card.Text>
                    
                       { productDet?.tags?.map((item:any, index:number) => (
                            <Button key={index+1} variant="outline-secondary" size="sm" style={{marginRight: "5px", marginBottom: "5px"}}>{item}</Button>
                        ))}        
                    
                    </Card.Text>
                    </Card.Body>
                </Card>
               )}
            </div>
       
          </div>

            
          <section id="product" className="portfolio sections-bg">
            <div className="container" data-aos="fade-up">
            {relatedProductList?.length !== 0 && ( 
              <div className="section-header-left  products-header">
                <h4>Related Products</h4>
              </div>
             
              )}
              {relatedProductList?.length !== 0 && (
                  <div className="col-lg-12 blog">
                    <div
                      className="portfolio-isotope"
                      data-portfolio-filter="*"
                      data-portfolio-layout="masonry"
                      data-portfolio-sort="original-order"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <div className="row portfolio-container">
                        { relatedProductList?.slice(0,4).map((item:any,index:number) => {
                              return (
                                <div
                                  className="col-lg-3 col-md-6 mt-3 portfolio-item filter-batteries"
                                  key={item?.id + index+1}
                                >
                                  <div className="portfolio-wrap bg-white">
                                  <Link
                                    href={`/product/`+item.slug_url}
                                      
                                      data-gallery="portfolio-gallery-app"
                                      className="glightbox cursor"
                                    >
                                      <img
                                      
                                        src={
                                          item.images? item.images?.[0]?.productImage :
                                          "https://source.unsplash.com/pWkk7iiCoDM/400x300"
                                        }
                                        className="img-fluid"
                                        alt={item?.title}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: 'auto', maxHeight:'200px' }} 
                                      />
                                    </Link>
                                    <div className="portfolio-info">
                                      <h4>
                                        <a
                                         
                                          title="More Details"
                                          className="cursor"
                                        >
                                          {item?.title}
                                        </a>
                                      </h4>
                                     
                                        {item?.brand?.name && (
                                        <p>
                                          <strong>Brand :</strong>
                                          {item?.brand?.name}
                                        </p>
                                      )}
                                      {item?.category?.name && (
                                        <p>
                                          <strong>Category :</strong>
                                          {item?.category?.name}
                                        </p>
                                      )}
                                      {item?.subcategory?.name && (
                                        <p>
                                          <strong>Sub Category :</strong>
                                          {item?.subcategory?.name}
                                        </p>
                                      )}
                                    </div>
                                    
                                    <div className="portfolio-footer">
                                      <Link
                                          href={`/product/`+item.slug_url}
                                          className="readmore stretched-link cursor"
                                          style={{color:'red', fontWeight:'bold'}}
                                        >
                                        View More <i className="bi bi-arrow-right"></i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              );
                            
                            })}
                          
                      </div>
                    </div>
                  </div>
                )}
            </div>
          </section>
      
      </>
        
    )
}

export default ProductDeailCom