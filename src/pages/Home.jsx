import React from 'react'
import { Link } from 'react-router-dom'

import Section, {SectionTitle, SectionBody} from '../components/Section'

import Grid from '../components/Grid'




const Home = () => {
    return (
        <div>
            {/* banner  */}
            
            {/* end banner*/}

            

            {/* product section */}
            <Section>
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
