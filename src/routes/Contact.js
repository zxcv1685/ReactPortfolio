import React from 'react';
import Header from '../conponents/Header';


function Contact(){
    return (
        <div id="wrap">
            <Header />
            <main id="main">
                <section id="contactCont">
                    <div className="container">
                        <div className="contactCont">
                            <h2>Contact</h2>
                            <div className="mail">zxcv1685@gmail.com</div>
                            <div className="social">
                                <h3>Social</h3>
                                <ul>
                                    <li>instargram</li>
                                    <li>twitter</li>
                                    <li>github</li>
                                    <li>codepen</li>
                                    <li>1rrock</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Contact;