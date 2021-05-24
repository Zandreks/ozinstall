import React, {useState,useEffect} from 'react'
import responseTamplase from "../../responseTamplase";
import line1 from '../../Assets/img/linetop.png'
import line2 from '../../Assets/img/linebotton.png'
import Slider from "react-slick";
import prev from '../../Assets/img/previous.png'
import next from '../../Assets/img/next.png'
import Credentials from "../../Components/Credentials/Credentials";
let PortfolioPage = ()=>{
    let [data,setData] = useState({})
    let getData = async ()=>{
        let res = await responseTamplase("/api/rest/portfolio/getObject/1",'get')
        setData(res)
    }
    let [dataCarusel,setDataCarusel] = useState([])
    let getDataCarusel = async ()=>{
        let res = await responseTamplase("/api/rest/portfoliocarusel/getObject",'get')
        setDataCarusel(res)
    }
    let [dataVideo,setDataVideo] = useState([])
    let getDataVideo = async ()=>{
        let res = await responseTamplase("/api/rest/portfoliovideo/getObject",'get')
        setDataVideo(res)
    }
    useEffect(()=>{
        getData()
        getDataCarusel()
        getDataVideo()
    },[])
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style , height:0, display: "block"}}
                onClick={onClick}
            >
                <img src={next} alt=""/>
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style,height:0, display: "block"}}
                onClick={onClick}
            >
                <img src={prev} alt=""/>
            </div>
        );
    }
    const settings = {
        dots: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        infinite: true,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow:1,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return(
        <div className='content-box'>
            <div className='about-page'>
                <div className='imgline'>
                    <img src={line1} className='line-top' alt=""/>

                </div>
                {/*<hr className='hr-top'/>*/}
                <div className='title-about'>
                    Portfolio
                </div>
                <img src={line2} className='line-botton' alt=""/>
                {/*<hr className='hr-button' />*/}
                <div className='subtitle'>
                    <h1>
                        {data.Title}
                    </h1>
                </div>
                <div className='carusel-about'>
                    <Slider {...settings}>
                        {dataCarusel.map(el=>{
                            return <div key={el.id}>
                                <div className='item-about-carusel'>
                                    <div className='img-catusel'>
                                        <img src={`/uploads/resized/${el.Prev}`} className='img-fluid' alt={el.Title}/>
                                    </div>

                                    <div className='content-carusel'>
                                        <div className='title-carusel'>
                                            {el.Title}
                                        </div>
                                        <div dangerouslySetInnerHTML={{__html:el.Description}} className='description'/>

                                        <div dangerouslySetInnerHTML={{__html:el.FooterDescription}} className='footer-carusel'/>
                                    </div>
                                </div>
                            </div>
                        })}


                    </Slider>

                </div>
                <div dangerouslySetInnerHTML={{__html:data.Description}} className='description-box-about'/>
                <div className='video-portfolio'>

                    <div className='row'>
                        {dataVideo.map(el=>{
                            return <div key={el.id} className='col-md-4'>
                                <div className='video-item'>
                                    <div
                                        className="video"
                                        style={{
                                            position: "relative",
                                            paddingBottom: "56.25%" /* 16:9 */,
                                            paddingTop: 25,
                                            height: 0,
                                            marginTop:10,

                                        }}
                                    >
                                        <iframe
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%"
                                            }}
                                            src={`https://www.youtube.com/embed/${el.VideoId}`}
                                            frameBorder="0"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
                <Credentials showContact={false}/>
            </div>
        </div>
    )
}

export default PortfolioPage
