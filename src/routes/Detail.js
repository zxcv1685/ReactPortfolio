import React from 'react';

class Detail extends React.Component {
    componentDidMount(){
        const {location, history} = this.props;
        if( location.state === undefined ){
            history.push('/');
        }
    }
    render() {
        const { location } = this.props;
        if(location.state){
            return (
                <div>
                    <span>{location.state.title}</span>
                    <span>{location.state.desc}</span>
                    <span><img src={location.state.image} alt={location.state.title} /></span>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Detail;