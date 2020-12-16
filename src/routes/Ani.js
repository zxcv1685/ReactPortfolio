import React from 'react';
import Header from '../conponents/Header';
import Title from '../conponents/Title';
import Footer from '../conponents/Footer'

function AniInfo({title, desc, source}){
    return (
        <div className="ani">
            <div className="ani-left">
                <h2>{title}</h2>
                <div className="view">
                    <iframe title="애니메이션" src={source}></iframe>
                </div>
            </div>
            <div className="ani-right">
                <p>{desc}</p>
            </div>
        </div>
        
    )
}

const aniData = [
    {
        title: 'CSS Animation',
        desc: 'transform의 rotate를 이용한 애니메이션',
        source: "https://zxcv1685.github.io/dothome1/effect/port/circle.html"
    },{
        title: 'Tentacle Animation',
        desc: 'css를 사용해 만든 Tentacle 애니메이션',
        source: "https://zxcv1685.github.io/dothome1/effect/port/tentacle.html"
    },{
        title: 'Roket Animation',
        desc: 'css를 사용해 만든 Roket 애니메이션',
        source: "https://zxcv1685.github.io/dothome1/effect/port/roket.html"
    },{
        title: 'SVG Animation',
        desc: 'svg 이용한 애니메이션',
        source: "https://zxcv1685.github.io/dothome1/effect/port/svgtext.html"
    },{
        title: 'GSAP Animation',
        desc: 'gsap 이용한 애니메이션',
        source: "https://zxcv1685.github.io/dothome1/effect/port/gsap.html"
    }
]

function Ani(){
    return (
        <div id="wrap">
            <Header color="white" />
            <main id="main">
                <section id="aniCont">
                    <div className="container">
                        <div className="titleWrap">
                            <Title text={['animation','site','animation site']} />
                        </div>
                        <div className="aniCont">
                            {aniData.map((site,index) => {
                                return <AniInfo 
                                    key={index}
                                    title={site.title}
                                    desc={site.desc}
                                    source={site.source}
                                />
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Ani;