import React from 'react';

interface HeroProps {
    titleOne?: string;
    titleTwo?: string;
    subtitle?: string
}

const Hero = ({titleOne, titleTwo, subtitle}: HeroProps) => {
    return (
        <>
        <header>
        <div className="page-header min-vh-75">
            <div className="oblique position-absolute top-0 h-100 d-md-block d-none">
                <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                     style={{backgroundImage: `url(https://images.unsplash.com/photo-1622007162147-e368af227771?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80)` }}>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-7 d-flex justify-content-center flex-column">
                        <h1 className="text-gradient text-primary">{titleOne}</h1>
                        <h1 className="mb-4">{titleTwo}</h1>
                        <p className="lead pe-5 me-5">{subtitle}</p>
                        {/*<div className="buttons">*/}
                        {/*    <button type="button" className="btn bg-gradient-primary mt-4">Get Started</button>*/}
                        {/*    <button type="button" className="btn text-primary shadow-none mt-4">Read more</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
        </header>

</>
    );
};

export default Hero;
