import React from 'react';
import Header from '../conponents/Header';
import Title from '../conponents/Title';
import Footer from '../conponents/Footer';

function ScriptInfo({title, source}){
    return (
        <div className="script">
            <div className="script-left">
                <h3>{title}</h3>
            </div>
            <div className="script-right">
                <div className="view">
                <iframe title={title} src={source}></iframe>
                </div>
                <div className="num">
                    <ul>
                        <li className="active"><span>1</span></li>
                        <li><span>2</span></li>
                        <li><span>3</span></li>
                        <li><span>4</span></li>
                        <li><span>5</span></li>
                        <li><span>6</span></li>
                        <li><span>7</span></li>
                        <li><span>8</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const siteData = [
    {
        id: '1',
        title: '마우스 이펙트 스크립트',
        source: [
            "https://zxcv1685.github.io/dothome1/effect/port/mouseEffect01-jquery.html",
            "https://zxcv1685.github.io/dothome1/effect/port/mouseEffect02-jquery.html",
            "https://zxcv1685.github.io/dothome1/effect/port/mouseEffect03-jquery.html",
            "https://zxcv1685.github.io/dothome1/effect/port/mouseEffect04-jquery.html",
            "https://zxcv1685.github.io/dothome1/effect/port/mouseEffect05-jquery.html",
            "https://zxcv1685.github.io/dothome1/effect/port/mouseEffect06-jquery.html",
            "https://zxcv1685.github.io/dothome1/effect/port/mouseEffect07-jquery.html",
            "https://zxcv1685.github.io/dothome1/effect/port/mouseEffect08-jquery.html",
        ]
    },{
        id: '2',
        title: '패랠랙스 이펙트 스크립트',
        source: [
            "https://zxcv1685.github.io/dothome1/effect/port/parallax01-jquery.html",
            "https://zxcv1685.github.io/dothome1/effect/port/parallax02-jquery.html",
            "https://zxcv1685.github.io/dothome1/effect/port/parallax03-jquery.html",
            "https://zxcv1685.github.io/dothome1/effect/port/parallax04-jquery.html",
            "https://zxcv1685.github.io/dothome1/effect/port/parallax05-jquery.html",
            "https://zxcv1685.github.io/dothome1/effect/port/parallax06-jquery.html",
            "https://zxcv1685.github.io/dothome1/effect/port/parallax07-jquery.html",
            "https://zxcv1685.github.io/dothome1/effect/port/parallax08-jquery.html",
        ]
    },{
        id: '3',
        title: '슬라이드 이펙트 스크립트',
        source: [
            "https://zxcv1685.github.io/dothome1/effect/port/sliderEffect01-jquery.html",
            "https://zxcv1685.github.io/dothome1/effect/port/sliderEffect02-jquery.html",
            "https://zxcv1685.github.io/dothome1/effect/port/sliderEffect03-jquery.html",
            "https://zxcv1685.github.io/dothome1/effect/port/sliderEffect04-jquery.html",
            "https://zxcv1685.github.io/dothome1/effect/port/sliderEffect05-jquery.html",
            "https://zxcv1685.github.io/dothome1/effect/port/sliderEffect06-jquery.html",
            "https://zxcv1685.github.io/dothome1/effect/port/sliderEffect07-jquery.html",
            "https://zxcv1685.github.io/dothome1/effect/port/sliderEffect08-jquery.html",
        ]
    },{
        id: '4',
        title: '메뉴 이펙트 스크립트',
        source: [
            "https://zxcv1685.github.io/dothome1/effect/port/sidemenu.html",
            "https://zxcv1685.github.io/dothome1/effect/port/tabmenu01.html",
            "https://zxcv1685.github.io/dothome1/effect/port/tabmenu02.html",
            "https://zxcv1685.github.io/dothome1/effect/port/parallax.html",
            "https://zxcv1685.github.io/dothome1/effect/port/dot.html",
            "https://zxcv1685.github.io/dothome1/effect/port/sticky.html",
            "https://zxcv1685.github.io/dothome1/effect/port/sliderEffect07-jquery.html",
            "https://zxcv1685.github.io/dothome1/effect/port/sliderEffect08-jquery.html",
        ]
    }
]


function Script(){
    return (
        <div id="wrap">
            <Header color="white" />
            <main id="main">
                <section id="scriptCont">v 
                    <div className="container">
                        <div className="titleWrap">
                            <Title text={['script reference','book','script reference book']} />
                        </div>
                        <div className="scriptCont">
                            {siteData.map((site) => {
                                return <ScriptInfo 
                                    key={site.id}
                                    title={site.title}
                                    source={site.source[0]}
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

export default Script;