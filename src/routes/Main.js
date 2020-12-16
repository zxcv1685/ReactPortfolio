import React from 'react';
import Header from '../conponents/Header';



function Main(){
    return (
        <div id="wrap">
            <Header />
            <main id="main">
                <section id="mainCont">
                    <div className="container">
                        <div className="mainCont">
                            <div>Actions </div>
                            <div>SPEAK LOUDER </div>
                            <div className="than"><span>THAN</span> </div>
                            <div>WORDS </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Main;