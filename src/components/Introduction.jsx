import React from 'react'
import Section, { SectionBody } from './Section'

const Introduction = () => {
    return (
        <Section>
            <SectionBody>
                <div className="section_body_introduction">
                    <img src="../images/introduction-bg.png" alt=""/>
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
    )
}

export default Introduction
