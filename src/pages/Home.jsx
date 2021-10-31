import React from 'react'

import Section, {SectionTitle, SectionBody} from '../components/Section'

import Grid from '../components/Grid'

import { Link } from 'react-router-dom'


//data
import productData from '../assets/fake-data/products'
import brandData from '../assets/fake-data/brand'


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
import pst1 from '../assets/images/icon/object-01.png'
import pst2 from '../assets/images/icon/object-02.png'
import pst3 from '../assets/images/icon/object-03.png'
import pst4 from '../assets/images/icon/object-04.png'
import pst5 from '../assets/images/icon/object-05.png'
import pst6 from '../assets/images/icon/object-06.png'
import pst7 from '../assets/images/icon/object-07.png'
import window from '../assets/images/img.png'
import issue01 from '../assets/images/icon/news-img-01.png'

import xucxac1 from '../assets/images/news-object-03.png'
import xucxac2 from '../assets/images/icon/news-object-02.png'
import obj1 from '../assets/images/icon/news-object-03.png'
import obj2 from '../assets/images/icon/news-object-04.png'
import obj3 from '../assets/images/icon/news-object-05.png'



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
                                                <img src={iconheart} alt="" />
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
            {/* end product section */}

            {/* Brand Story section */}
            <Section>
                <div className="section_brand">
                    <SectionTitle>
                        <div className="txt brand">
                                Best Product
                        </div>
                        <div className="section_title_brand-text">
                            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                            다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                        </div>
                    </SectionTitle>
                    <SectionBody>
                    <div className="section_body_brand-body_position1">
                        <img src={pst1} alt="" />
                    </div>

                    <div className="section_body_brand-body_position2">
                        <img src={pst2} alt="" />
                    </div>

                    <div className="section_body_brand-body_position3">
                        <img src={pst3} alt="" />
                    </div>

                    <div className="section_body_brand-body_position4">
                        <img src={pst4} alt="" />
                    </div>

                    <div className="section_body_brand-body_position5">
                        <img src={pst5} alt="" />
                    </div>

                    <div className="section_body_brand-body_position6">
                        <img src={pst6} alt="" />
                    </div>
                    
                    <div className="section_body_brand-body_position7">
                        <img src={pst7} alt="" />
                    </div>
                        <div className="section_body_brand-body">
                            <div className="section_body_brand-body_item">
                                <div className="section_body_brand-body_item_line">
                                    <div className="section_body_brand-body_item_line_line"></div>
                                </div>
                                <div className="section_body_brand-body_item_box">
                                    <div className="section_body_brand-body_item_box_item a">
                                        <img src={window} alt="" />
                                    </div>
                                    <div className="section_body_brand-body_item_box_item">
                                        <div className="section_body_brand-body_item_box_item_content">
                                            <p className="brandstory">What Happened’s Brand story</p>
                                            <p className="brandtext">
                                            청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을 
                                            봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                                            긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                                            인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                                            아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다. 
                                            </p>
                                            <p className="seemore">
                                                <Link to="/" className="btn">see more</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SectionBody>
                </div>
            </Section>             
            {/* end Brand Story section */}

            {/* issue */}
            <Section>
                <div className="section_issue">
                    <SectionTitle>
                        <div className="ttl issue">
                            Happened’s issue
                        </div>
                        <div className="section_title_issue-text">
                            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                            다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                        </div>
                        <div className="section_title_see">
                            <Link to="/" className="btn">see more</Link>
                        </div>
                    </SectionTitle>
                    <SectionBody>
                    <div className="section_body_issue-body_obj1">
                        <img src={xucxac1} alt="" />
                    </div>
                    <div className="section_body_issue-body_obj2">
                        <img src={xucxac2} alt="" />
                    </div>
                    <div className="section_body_issue-body_obj3">
                        <img src={obj1} alt="" />
                    </div>
                    <div className="section_body_issue-body_obj4">
                        <img src={obj2} alt="" />
                    </div>
                    <div className="section_body_issue-body_obj5">
                        <img src={obj3} alt="" />
                    </div>

                    <div className="section_body_issue-body">

                        <div className="section_body_issue-body_item">
                            <div className="section_body_issue-body_item_box">
                                whpn
                                issue  
                                <img src={issue01} alt="" />
                            </div>
                            {
                                brandData.map((item, index) => (
                                    <div className="section_body_issue-body_item_box" key={index}>
                                        <div className="section_body_issue-body_item_box_heade">
                                            {item.title}
                                        </div>
                                        <img src={item.image01} alt="" />
                                    </div>
                                ))
                            }
                            

                        </div>

                        </div>
                    </SectionBody>
                </div>
            </Section>
            {/* end issue */}

            {/* video section */}
            <Section>
                <div className="section_video">
                    <SectionTitle>
                        <div className="ttl video">
                            what happened
                        </div>
                        <div className="section_title_video-text">
                            How to create mobile-optimized videos in minutes. Not a designer, 
                            every team makes a lot of videos Can be trimmed. Take the first 
                        </div>
                        <div className="section_title_see mor">
                            <Link to="/" className="btn">see more</Link>
                        </div>
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
                </div>
            </Section>  
            {/* end video section */}

            
        </div>
    )
}

export default Home
