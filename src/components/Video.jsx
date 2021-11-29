import React from 'react'
import { Link } from 'react-router-dom'
import Section, { SectionBody, SectionTitle } from './Section'

const Video = () => {
    return (
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
                        <div className="section_body_video-body_video01">
                            <img src="../images/video-object-01.png" alt="" />
                        </div>
                        <div className="section_body_video-body_video02">
                            <img src="../images/video-object-02.png" alt="" />
                        </div>
                        <div className="section_body_video-body_video03">
                            <img src="../images/video-object-03.png" alt="" />
                        </div>
                        <div className="section_body_video-body_video04">
                            <img src="../images/video-object-04.png" alt="" />
                        </div>
                        <div className="section_body_video-body_video05">
                            <img src="../images/video-object-05.png" alt="" />
                        </div>
                        <div className="section_body_video-body_video06">
                            <img src="../images/video-object-06.png" alt="" />
                        </div>
                        <div className="section_body_video-body_video07">
                            <img src="../images/video-object-07.png" alt="" />
                        </div>
                        <div className="section_body_video-body_video08">
                            <img src="../images/video-object-08.png" alt="" />
                        </div>
                        <div className="section_body_video-body_video09">
                            <img src="../images/video-object-09.png" alt="" />
                        </div>
                        <div className="section_body_video-body_video">
                            <img src="../images/video.png" alt="" />
                        </div>
                    </SectionBody>
                </div>
            </Section>  
    )
}

export default Video
