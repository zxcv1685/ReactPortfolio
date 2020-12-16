import React from 'react';
import axios from 'axios';
import SiteInfo from '../conponents/SiteInfo';
import Header from '../conponents/Header';
import Title from '../conponents/Title';
import Footer from '../conponents/Footer';
import Loading from '../conponents/Loading';

class Port extends React.Component {
    state = {
        isLoading : true,
        sites : []
    }

    getSites = async () => {
        const {
            data: {
                data: { ports }
            }
        } = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json");
        // console.log(sites.data.data.ports;
        this.setState( {sites: ports, isLoading: false});
    }

    componentDidMount(){
        setTimeout( () => {
            this.getSites();
        }, 3000);
    }

    render(){
        const { isLoading, sites } = this.state;
        return (
            <div id="wrap">
                <Header />
                { isLoading ?
                    (
                        <div className="loading">
                            <Loading />
                        </div>
                    ) : (
                        <main id="main">
                            <section id="siteCont">
                                <div className="container">
                                    <div className="titleWrap">
                                        <Title text={['Site','Reference','Site Reference']} />
                                    </div>
                                    <div className="siteCont">
                                        { sites.map( port => (
                                            <SiteInfo
                                                key={port.id}
                                                id={port.id}
                                                link={port.link}
                                                image={port.image}
                                                title={port.title}
                                                category={port.category}
                                            />
                                        )) }
                                    </div>
                                </div>
                            </section>
                        </main>
                    )
                }
                <Footer />
            </div>
        )
    }
}

export default Port;