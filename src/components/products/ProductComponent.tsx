'use client'

import React, {useContext, useState } from 'react';
import ReactPaginate from "react-paginate";
import './Products.scss';
import { DataContext } from "../../context/DataContext";



const ProductComponent = ({ ProductList  }: {ProductList: any}) => {
  
    const itemsPerPage:number = 25;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset:number = itemOffset + itemsPerPage;
    const [searchProduct, setSearchProduct] = useState<any | null>(ProductList);
     const businessDetails:any = useContext(DataContext);
     const whatsappNum:any = businessDetails?.whatsappUs;

    const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (
            event.target.value?.length >= 1 
        ) {
           const filterProducts =  ProductList.filter((item:any) => item?.title?.toLowerCase().includes(event.target.value?.toLocaleLowerCase())); 
           setSearchProduct(filterProducts);
          }else if( event.target.value?.length === 0){
            setSearchProduct(ProductList);
          }
    };

    const currentItems =
    searchProduct?.length !== 0
      ? searchProduct?.slice(itemOffset, endOffset)
      : [];
 
  const pageCount =
  searchProduct?.length !== 0
      ? Math.ceil(searchProduct?.length / itemsPerPage)
      : 1;

  const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) %  searchProduct?.length;
        setItemOffset(newOffset);
      };
   

  return (
    <>
        <div className="sidebar-item search-form mb-5">
            <input
              type="text"
              placeholder="Search Product"
                onChange={handleSearchValue}
            />
            <button >
              <i className="bi bi-search"></i>
            </button>
          </div>

          <div className="row g-5">
           
              <div className="col-lg-12 blog">
                <div
                  className="portfolio-isotope"
                  data-portfolio-filter="*"
                  data-portfolio-layout="masonry"
                  data-portfolio-sort="original-order"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="row gy-4 portfolio-container">
                    {searchProduct?.length !== 0
                      ? currentItems?.map((item:any, index:number) => {
                        return (
                          <div
                            className="col-xl-3 col-md-6 portfolio-item filter-batteries"
                            key={item?.title + index}
                          >
                            <div className="portfolio-wrap bg-white">
                            <a
                                href={`/product/`+item.slug_url}
                                data-gallery="portfolio-gallery-app"
                                className="glightbox cursor"
                              >
                                <img
                                  src={
                                    item?.images?.[0]?.productImage ||
                                    "https://source.unsplash.com/pWkk7iiCoDM/400x300"
                                  }
                                  width={0}
                                  height={0}
                                  sizes="100vw"
                                  style={{ width: '100%',  height:'200px' }} 
                                  className="img-fluid"
                                  loading="eager"
                                  alt={item?.title}
                                />
                              </a>
                              <div className="portfolio-info">
                                <h4>
                                <a
                                    href={`/product/`+item.slug_url}
                                    className="cursor"
                                  >
                                    {item?.title}
                                  </a>
                                </h4>
                                {item?.brand?.name && <p><strong>Brand :</strong> {item?.brand?.name}</p>}
                                {item?.category?.name && <p><strong>Category :</strong> {item?.category?.name}</p>}
                                {item?.subcategory
                                  ?.name && <p><strong>Sub Category :</strong> {item?.subcategory
                                    ?.name}</p>}
                              </div>
                              
                              { whatsappNum?.whatsappnumber &&
                                <div className="portfolio-footer" style={{backgroundColor:"#075e54"}}>
                                  <a                              
                                    href={whatsappNum?.whatsappUrl +"I’m interested in the *" + item?.title + "* %0aCould you please provide more details?"}
                                    className="readmore stretched-link cursor"
                                    style={{color:'white'}}
                                  >
                                  <i className="bi bi-whatsapp"></i> Whatsapp Inquiry 
                                  </a>
                                </div>
                                }
                                
                              <div className="portfolio-footer">
                                    <a
                                        href={`/product/`+item.slug_url}
                                        className="readmore stretched-link cursor"
                                        style={{color:'red', fontWeight:'bold'}}
                                    >
                                        View More <i className="bi bi-arrow-right"></i>
                                    </a>
                              </div>
                            </div>
                          </div>
                        );
                      })
                      : <div style={{fontSize:'25px', color:'red'}}>No Products Found...!! </div>}
                  </div>
                </div>

                {searchProduct?.length !== 0 ? (
                  <div className="blog-pagination">
                    <ul className="justify-content-center">
                      <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                        activeClassName="active"
                      />
                    </ul>
                  </div>
                ) : null}
                
              </div>
         
          </div>
    </>
  )}


  export default ProductComponent;