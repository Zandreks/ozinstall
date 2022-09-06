import React, {useState,useEffect} from 'react'
import responseTamplase from "../../responseTamplase";
import Slider from "react-slick";

import prev from '../../Assets/img/previous.png'
import next from '../../Assets/img/next.png'
let Partner =()=>{
    let [data,setData] = useState([])
    let getData = async ()=>{
        let res = await responseTamplase("/api/rest/partners/getObject",'get')
        if (!!res){
            setData(res)

        }
    }
    useEffect(()=>{
        getData()
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
        speed: 3000,
        autoplaySpeed: 2000,
        infinite: true,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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
        <div className='partner'>
            <div className='title'>
                Our PARTNERS
            </div>
            <div className='partners-carusel'>
                <Slider {...settings}>
                    {data.map(el=>{
                        return(
                            <div key={el.id}>
                                <a target='_blank' href={el.Link}><img className='img-fluid carusel-img-item' src={`/uploads/resized/${el.Logo}`} alt={el.Title}/></a>
                            </div>
                        )
                    })}

                </Slider>

            </div>
        </div>
    )
}
export default Partner
