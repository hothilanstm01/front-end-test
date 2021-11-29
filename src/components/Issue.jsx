import React from 'react'
import { Link } from 'react-router-dom'
import Section, { SectionBody, SectionTitle } from './Section'
import brandData from '../assets/fake-data/brand'

const Issue = () => {
    return (
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
                <img src="../images/news-object-03-1.png" alt="" />
            </div>
            <div className="section_body_issue-body_obj2">
                <img src="../images/news-object-02.png" alt="" />
            </div>
            <div className="section_body_issue-body_obj3">
                <img src="../images/news-object-03.png" alt="" />
            </div>
            <div className="section_body_issue-body_obj4">
                <img src="../images/news-object-04.png" alt="" />
            </div>
            <div className="section_body_issue-body_obj5">
                <img src="../images/news-object-05.png" alt="" />
            </div>

            <div className="section_body_issue-body">

                <div className="section_body_issue-body_item">
                    <div className="section_body_issue-body_item_box">
                    <p>whpn
                        issue</p>  
                        <img src="../images/news-img-01.png" alt="" />
                       
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
    )
}

export default Issue
