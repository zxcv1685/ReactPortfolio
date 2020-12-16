import React from 'react';
import Header from '../conponents/Header';
import Title from '../conponents/Title';
import Footer from '../conponents/Footer'

function AboutText({key, title, desc, image, image2x}){
    return (
        <div>
            <div className="aiLeft">
                <img src={image} srcSet={image2x} alt={title} />
            </div>
            <div className="aiRight">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}

const aboutMe = [
    {
        id: 1,
        title: '꿈을 설계하고 디자인하다.',
        desc: '고등학교 1학년 시절 컴퓨터과에 들어갔던 저는 하고싶은게없어서 좋아하는 과목하나없었습니다. 그러다 2학년이 되었는데 웹디자인 이라는 과목을 새로 배우게 됬었는데너무 재밌어서 수업도 열심히듣고 혼자서 코딩을 재밌게 했던 기억이 있습니다.저는 그때 웹디자이너가 되고싶다고 진로를 정했습니다.',
        image: '../img/aboutImg01.jpg',
        image2x: '../img/aboutImg01@2x.jpg, ../img/aboutImg01@3x.jpg',
    },{
        id: 2,
        title: '좋은 경험으로 성장하다.',
        desc: '대학생 시절 철없이 학교를 다니던 저는 1학년이 끝나고 군대를 가게 되었습니다.군대를 전역하고 나서는 철없이 살면 안되겠다는 생각에 학교를 다니면서 뭐라도 해야겠다는 생각이 들었습니다. 그래서 운동도하고 아르바이트를 구하던 중 우연히 태권도 공고를 보고 태권도 사범을 하게 되었는데 아이들을 보면서 생각도 긍정적이게 되고 일에 책임감을 갖게 되었습니다.',
        image: '../img/aboutImg02.jpg',
        image2x: '../img/aboutImg02@2x.jpg, ../img/aboutImg02@3x.jpg',
    },{
        id: 3,
        title: '꿈을 설계하고 디자인하다.',
        desc: '고등학교 1학년 시절 컴퓨터과에 들어갔던 저는 하고싶은게없어서 좋아하는 과목하나없었습니다. 그러다 2학년이 되었는데 웹디자인 이라는 과목을 새로 배우게 됬었는데너무 재밌어서 수업도 열심히듣고 혼자서 코딩을 재밌게 했던 기억이 있습니다.저는 그때 웹디자이너가 되고싶다고 진로를 정했습니다.',
        image: '../img/aboutImg03.jpg',
        image2x: '../img/aboutImg03@2x.jpg'
    },{
        id: 4,
        title: '꿈을 설계하고 디자인하다.',
        desc: '고등학교 1학년 시절 컴퓨터과에 들어갔던 저는 하고싶은게없어서 좋아하는 과목하나없었습니다. 그러다 2학년이 되었는데 웹디자인 이라는 과목을 새로 배우게 됬었는데너무 재밌어서 수업도 열심히듣고 혼자서 코딩을 재밌게 했던 기억이 있습니다.저는 그때 웹디자이너가 되고싶다고 진로를 정했습니다.',
        image: '../img/aboutImg04.jpg',
        image2x: '../img/aboutImg04@2x.jpg'
    }
]


function About(){
    return (
        <div id="wrap">
            <Header color="white" />
            <main id="main">
                <section id="aboutCont">
                    <div className="container">
                        <div className="titleWrap">
                            <Title text={['about','me','about me']} />
                        </div>
                        <div className="aboutCont">
                            {aboutMe.map((txt) => (
                                    <AboutText key={txt.id} title={txt.title} desc={txt.desc} image={txt.image} image2x={txt.image2x} />
                            ))}    
                            {/* <div className="banner" />
                            <div className="about01">
                                <h3>진로를 정하게 되다.</h3>
                                <p>
                                    고등학교 1학년 시절 컴퓨터과에 들어갔던 저는 하고싶은게없어서 좋아하는 과목하나 <br />
                                    없었습니다. 그러다 2학년이 되었는데 웹디자인 이라는 과목을 새로 배우게 됬었는데 <br />
                                    너무 재밌어서 수업도 열심히듣고 혼자서 코딩을 재밌게 했던 기억이 있습니다. <br />
                                    저는 그때 웹디자이너가 되고싶다고 진로를 정했습니다.
                                </p>
                            </div>
                            <div className="about02">
                                <div className="about_img01" />
                                <h3>좋은 경험으로 성장하다.</h3>
                                <p>
                                대학생 시절 철없이 학교를 다니던 저는 1학년이 끝나고 군대를 가게 되었습니다. <br />
                                군대를 전역하고 나서는 철없이 살면 안되겠다는 생각에 학교를 다니면서 뭐라도  <br />
                                해야겠다는 생각이 들었습니다. 그래서 운동도하고 아르바이트를 구하던 중 우연 <br />
                                히 태권도 공고를 보고 태권도 사범을 하게 되었는데 아이들을 보면서 생각도 긍 <br />
                                정적이게 되고 일에 책임감을 갖게 되었습니다.
                                </p>
                            </div>
                            <div className="about03">
                                <div className="about_img02" />
                                <h3>진로를 정하게 되다.</h3>
                                <p>
                                    고등학교 1학년 시절 컴퓨터과에 들어갔던 저는 하고싶은게없어서 좋아하는 과목하나 <br />
                                    없었습니다. 그러다 2학년이 되었는데 웹디자인 이라는 과목을 새로 배우게 됬었는데 <br />
                                    너무 재밌어서 수업도 열심히듣고 혼자서 코딩을 재밌게 했던 기억이 있습니다. <br />
                                    저는 그때 웹디자이너가 되고싶다고 진로를 정했습니다.
                                </p>
                            </div>
                            <div className="about04">
                                <div className="about_img03" />
                                <h3>진로를 정하게 되다.</h3>
                                <p>
                                    스펀지 같은 사람이 되겠습니다. 학원에서 배우고 회사에 가게 되도 저는 아직 미 <br />
                                    숙하고 모자라겠지만 항상 배우는 자세로 스펀지가 물을 흡수하듯이 빠르게 배 <br />
                                    우고 실력을 향상 시키겠습니다. 쉽지 않은 일이지만 그렇게 되도록 노력하고 발 <br />
                                    전하겠습니다. 그리고 실력을 키워 프론트 앤드 개발자가 되어 기업성장에 도움 <br />
                                    이 되도록 열심히 하겠습니다. <br />
                                    지금까지 저의 자기소개를 읽어주셔서 감사합니다.
                                </p>
                            </div> */}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default About;