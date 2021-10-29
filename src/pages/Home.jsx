import React from 'react'

import Section, {SectionTitle, SectionBody} from '../components/Section'

import Grid from '../components/Grid'

// img
import banner from '../assets/images/main-banner.png'
import introduction from '../assets/images/introduction-bg.png'
import bestimg01 from '../assets/images/best-image-01.png'
import bestimg02 from '../assets/images/best-image-02.png'
import bestimg03 from '../assets/images/best-image-03.png'
import iconheart from '../assets/images/icon/hearticon.png'
import producticon01 from '../assets/images/icon/producticon-01.png'
import producticon02 from '../assets/images/icon/producticon-02.png'
import producticon03 from '../assets/images/icon/producticon-03.png'


const Home = () => {
    return (
        <div>
            {/* banner  */}

            <Section>
                <SectionBody>
                    <div className="section_body_banner">
                        <img src={banner} alt=""/>
                    </div>
                </SectionBody>
            </Section>

            {/* end banner*/}

            {/* introduction */}
            <Section>
                <SectionBody>
                    <div className="section_body_introduction">
                        <img src={introduction} alt=""/>
                        <div className="section_body_introduction_content">
                            <h3>What Happened!</h3>
                            <p>How to create mobile-optimized videos in minutes. Not a designer, 
                            every team makes a lot of videos Can be trimmed. Take the first 
                            step to your brand's success. How to create 
                            mobile-optimized videos in minutes.</p>
                        </div>
                    </div>
                    
                </SectionBody>
            </Section>
            {/* end introduction */}

            {/* best product  */}

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

                                                <img src={bestimg01} alt="" />

                                                <p className="section_body_body-box_item_box_icon">
                                                    <img src={producticon01} alt="" />
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

                                                <img src={bestimg02} alt="" />

                                                <p className="section_body_body-box_item_box_icon">
                                                    <img src={producticon02} alt="" />
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

                                                <img src={bestimg03} alt="" />

                                                <p className="section_body_body-box_item_box_icon">
                                                    <img src={producticon03} alt="" />
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

            {/*end best product  */}


            {/* product section */}
            <Section>
                <SectionBody>
                    <div className="section_body_products">
                        <Grid
                            col={5}
                            mdcol={2}
                            smcol={1}
                            gap={18}
                        >
                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>

                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>

                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>


                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>


                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>

                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>


                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>


                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>


                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>


                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>


                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>


                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>


                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>


                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>

                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>

                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>

                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>


                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>


                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>


                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>

                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>

                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>

                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>

                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>

                            <div className="section_body_products_box">
                                <img src={bestimg01} alt="" />

                                <p className="section_body_products_box_title">
                                    [what happen] How to create 
                                </p>

                                <div className="section_body_products_box_info">
                                    <p className="section_body_products_box_info_price">2,500 won</p>
                                    <p className="section_body_products_box_info_heart">
                                        <img src={iconheart} alt="" />
                                        236
                                    </p>
                                </div>

                            </div>
                            
                        </Grid>
                    </div>
                </SectionBody>
            </Section>
            {/* end product section */}

            {/* best selling section */}
                <Section>
                    <SectionTitle>
                        Top selling products of the week 
                    </SectionTitle>
                    <SectionBody>
                        <Grid
                            col={4}
                            mdcol={2}
                            smcol={1}
                            gap={20}
                        >
                            
                        </Grid>
                    </SectionBody>
                </Section>             
            {/* end best selling section */}

            {/* video */}
            <Section>
                <SectionBody>
                    
                </SectionBody>
            </Section>
            {/* end video */}

            {/* new arrival section */}
            <Section>
                    <SectionTitle>
                        News
                    </SectionTitle>
                    <SectionBody>
                        <Grid
                            col={4}
                            mdcol={2}
                            smcol={1}
                            gap={20}
                        >
                            
                        </Grid>
                    </SectionBody>
                </Section>  
            {/* end new arrival section */}

            
        </div>
    )
}

export default Home
