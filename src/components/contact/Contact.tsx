'use client';

import React, { useContext} from "react";
import { DataContext } from "../../context/DataContext";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Contact = () => {

  const businessDetails:any = useContext(DataContext);
  const businessDet:any = businessDetails?.businessContants;
  const whatsappNum:any = businessDetails?.whatsappUs;
  const phone_one:any = [businessDet?.phone_1?.slice(0, 5), " - ", businessDet?.phone_1?.slice(5)].join('');
  const phone_two:any = [businessDet?.phone_2?.slice(0, 5), " - ", businessDet?.phone_2?.slice(5)].join('');
  const whatsappNo:any = [whatsappNum?.whatsappnumber?.slice(0,5), " - ", whatsappNum?.whatsappnumber?.slice(5)].join('');

 
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Contact</h2>
        </div>

        <div className="row gx-lg-0 gy-4">
          <div className="col-lg-4">
            <div className="info-container d-flex flex-column align-items-center justify-content-center">

              {businessDet?.address?
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Location:</h4>
                  <p>{businessDet?.address}</p>
                </div>
              </div> : null
              }
              
              {businessDet?.email?
              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <a style={{color:"white"}} href={`mailto:${businessDet?.email}`}> {businessDet?.email} </a>
                </div>
              </div>
              : null}


              {businessDet?.whatsapp?
              <div className="info-item d-flex">
                <i className="bi bi-whatsapp flex-shrink-0"></i>
                <div>
                  <h4>Whatsapp:</h4>
                  <a href={whatsappNum?.whatsappUrl} style={{color:'white'}}>+91 {whatsappNo}</a>
                </div>
              </div>
              : null}


              <div className="info-item d-flex">
                <i className="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>Call:</h4>
                  <a href={`tel:${businessDet?.phone_1}`} style={{color:'white'}}>+91 {phone_one}</a><br/>
                  {businessDet?.phone_2? <a href={`tel:${businessDet?.phone_2}`} style={{color:'white'}}>+91 {phone_two}</a>: null }
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-clock flex-shrink-0"></i>
                <div>
                  <h4>Open Hours:</h4>
                  {businessDet?.business_time?.filter((item:any) => item.status === "open").map((item:any, i:number) => 
                    (
                      <Container key={i+1}>
                        <Row >
                          <Col >{item?.days}</Col>
                          <Col >{item?.open}-{item.close}</Col>
                        </Row>
                      </Container>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 px-3">

            {businessDet?.location? 
            <div id="map" dangerouslySetInnerHTML={{__html: businessDet?.location}} style={{width: '100%', height:'100%'}}>
                

            </div> : null
            }
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
