import React from 'react';
import NewsCard from '../NewsCard/newsCard';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './demo.css';

const API_KEY = '697769c5ef964222a69cc75251a687dd';

const URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;


class Demo extends React.Component {

    constructor() {
        super();
        this.state = {
            news: [],
            apiCallProgress: false
        };

        fetch(URL)
            .then(res => {
                this.setState({
                    apiCallProgress: true,
                })
                return res.json();
            })
            .then(res => {
                this.setState({
                    news: res.articles,
                    apiCallProgress: false,
                })
                console.log(res)
            }
            );
    }

    render() {
        return (
            <div className='application-container'>
                <div className='app-title'>
                    <h1 className='app-title-heading'>Latest News</h1>
                    <p className='app-title-subtext'>Top 20 current news articles</p>
                </div>
                {this.state.apiCallProgress === false ? <OwlCarousel
                    id='owl-car'
                    className="owl-theme"
                    margin={0}
                    nav
                    items='3'
                >
                    {this.state.news.map((item, index) => {
                        return (<NewsCard key={index} title={item.title} description={item.description} image={item.urlToImage} url={item.url}/>)
                    })}
                </OwlCarousel> : <h1></h1>}

            </div>
        )
    }
}

export default Demo;