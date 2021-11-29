import React from 'react'
import { Link } from 'react-router-dom'
import Section, { SectionBody, SectionTitle } from './Section'

const Brand = () => {
    return (
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
                <img src="../images/icon/object-01.png" alt="" />
            </div>

            <div className="section_body_brand-body_position2">
                <img src="../images/icon/object-02.png" alt="" />
            </div>

            <div className="section_body_brand-body_position3">
                <img src="../images/icon/object-03.png" alt="" />
            </div>

            <div className="section_body_brand-body_position4">
                <img src="../images/icon/object-04.png" alt="" />
            </div>

            <div className="section_body_brand-body_position5">
                <img src="../images/icon/object-05.png" alt="" />
            </div>

            <div className="section_body_brand-body_position6">
                <img src="../images/icon/object-06.png" alt="" />
            </div>
            
            <div className="section_body_brand-body_position7">
                <img src="../images/icon/object-07.png" alt="" />
            </div>
                <div className="section_body_brand-body">
                    <div className="section_body_brand-body_item">
                        <div className="section_body_brand-body_item_line">
                            <div className="section_body_brand-body_item_line_line"></div>
                        </div>
                        <div className="section_body_brand-body_item_box">
                            <div className="section_body_brand-body_item_box_item a">
                                <img src="../images/img.png" alt="" />
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
    )
}

export default Brand
