import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Header from '../conponents/Header'
import Loading from '../conponents/Loading'
import Title from '../conponents/Title'
import Footer from '../conponents/Footer'
import { Link } from 'react-router-dom'

function ReferInfo({id, title, desc, image}){
    return (
        <li>
            <Link to={{
                pathname: 'reference-detail',
                state: {id, title, desc, image}
            }}>
                <span className="alpha">{id}</span>
                <span className="tag">{title}</span>
                <span className="desc">{desc}</span>
            </Link>
        </li>
    )
}

ReferInfo.prototype = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
}

class Reference extends React.Component {
    state = {
        isLoading: true,
        refer: []
    }
    getRefer = async () => {
        const {
            data:{
                data:{refer},
            },
        } = await axios.get("https://zxcv1685.github.io/dothome1/reference.json")
        //console.log(refer)
        this.setState({refer: refer, isLoading: false});
    }
    componentDidMount(){
        setTimeout(()=>{
            this.getRefer();
        },3000);
    }
    render(){
        const{ refer, isLoading } = this.state;
        return (
            <div>
                <Header />
                { isLoading ? (
                    <div className="loading">
                        <Loading />
                    </div>
                ) : (
                    <main id="main">
                            <section id="referCont">
                                <div className="container">
                                    <div className="titleWrap">
                                        <Title text={['Reference','Book','Reference Book']} />
                                    </div>
                                    <div className="referCont">
                                        <h2>HTML</h2>
                                        <ul>
                                            { refer.map( (port, index) => (
                                                <ReferInfo
                                                    key={index}
                                                    id={index}
                                                    title={port.title}
                                                    desc={port.desc}
                                                    image={port.image}
                                                />
                                            )) }
                                        </ul>
                                        
                                    </div>
                                </div>
                            </section>
                    </main>
                )}
                <Footer />
            </div>
        )
    }
}
export default Reference;