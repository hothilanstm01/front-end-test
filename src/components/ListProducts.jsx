import React from 'react'
import Section, { SectionBody } from './Section'
import productData from '../assets/fake-data/products'
import { Link } from 'react-router-dom'

const ListProducts = () => {
    return (
        <Section>
                <SectionBody>
                    <div className="head">
                        <div className="section_body_products">
                            {
                                productData.map((item, index) => <Link  to="/">
                                    <div className="section_body_products_box">
                                        
                                        <img src={item.image01} alt="" />

                                        <p className="section_body_products_box_title">
                                        {item.title}
                                        </p>

                                        <div className="section_body_products_box_info">
                                            <p className="section_body_products_box_info_price">{item.price}</p>
                                            <p className="section_body_products_box_info_heart">
                                                <img src="../images/hearticon.png" alt="" />
                                                <p>{item.heart}</p>
                                            </p>
                                        </div>
                                    </div>
                                </Link>)
                            }
                        </div>

                        <div className="see">
                            <Link to="/" className="btn">see more</Link>
                        </div>
                    </div>
                </SectionBody>
               
            </Section>
    )
}

export default ListProducts
