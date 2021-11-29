import React from 'react'
import Grid from './Grid'
import Section, { SectionBody, SectionTitle } from './Section'

const BestProduct = () => {
    return (
        <Section>
        <div className="section_best">
            <SectionTitle>
                <div className="ttl">
                    Best Product
                </div>
                <div className="section_title_text-best">
                    How to create mobile-optimized videos in minutes. Not a designer, 
                    every team makes a lot of videos Can be trimmed. Take the first 
                </div>
            </SectionTitle>
            
            <SectionBody>
                <div className="section_body_body-box">

                    <div className="section_body_body-box_item">

                        <Grid
                            col={3}
                            mdcol={2}
                            smcol={1}
                            gap={0}
                        >
                            <div className="section_body_body-box_item_box">

                                <div className="section_body_body-box_item_box_img">

                                    <img src="../images/best-image-01.png" alt="" />

                                    <p className="section_body_body-box_item_box_icon">
                                        <img src="../images/icon/producticon-01.png" alt="" />
                                    </p>

                                    <div className="section_body_body-box_item_box_info">
                                        <p className="section_body_body-box_item_box_info_name">
                                            How to create mobile-optimized
                                        </p>
                                        <p className="section_body_body-box_item_box_info_go">
                                            go
                                        </p>
                                    </div> 

                                </div>


                                </div>

                                <div className="section_body_body-box_item_box">

                                <div className="section_body_body-box_item_box_img">

                                    <img src="../images/best-image-02.png" alt="" />

                                    <p className="section_body_body-box_item_box_icon">
                                        <img src="../images/icon/producticon-02.png" alt="" />
                                    </p>

                                    <div className="section_body_body-box_item_box_info">
                                        <p className="section_body_body-box_item_box_info_name">
                                            How to create mobile-optimized
                                        </p>
                                        <p className="section_body_body-box_item_box_info_go">
                                            go
                                        </p>
                                    </div> 
                                        
                                </div>


                                </div>

                                <div className="section_body_body-box_item_box">

                                <div className="section_body_body-box_item_box_img">

                                    <img src="../images/best-image-03.png" alt="" />

                                    <p className="section_body_body-box_item_box_icon">
                                        <img src="../images/icon/producticon-03.png" alt="" />
                                    </p>

                                    <div className="section_body_body-box_item_box_info">
                                        <p className="section_body_body-box_item_box_info_name">
                                            How to create mobile-optimized
                                        </p>
                                        <p className="section_body_body-box_item_box_info_go">
                                            go
                                        </p>
                                    </div> 
                                        
                                </div>

                            </div>
                        </Grid>

                    </div>
                    
                </div>
            </SectionBody>
        </div>
    </Section>
    )
}

export default BestProduct
