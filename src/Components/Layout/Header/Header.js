import React, {useState,useEffect} from 'react'
import {NavLink} from "react-router-dom";
import facebook from '../../../Assets/img/facebook.png'
import twitter from '../../../Assets/img/twitter.png'
import youtube from '../../../Assets/img/youtube.png'
import email from '../../../Assets/img/email.png'
import linkedin from '../../../Assets/img/linkedin.png'
import instagram from '../../../Assets/img/instagram.png'
import logo from '../../../Assets/img/LogoHeader.png'
import logoFon from '../../../Assets/img/HeaderBG.png'
import { MdClose, MdMenu } from "react-icons/md";
import responseTamplase from "../../../responseTamplase";

import { useTransition, animated, config } from "react-spring";

const styleToggleButton = {
    fontSize: "28px",
    color: "rgb(36,36,36)",
    padding: 0,
    border: "none",
    background: "none"
};

let Header = ({isOpen,setIsOpen}) => {
    let [data,setData] = useState([])
    let getData = async ()=>{
        let res = await responseTamplase("/api/rest/sosioallink/getObject",'get')
        let dataArr = []
        for (let val of res){
            if (val.TypeLink ==="facebook"&& val.Show =="true" ){
                dataArr.push({
                    url:val.Link,
                    img:facebook,
                    alt:"facebook"
                })
            }
            if (val.TypeLink ==="twitter"&& val.Show =="true" ){
                dataArr.push({
                    url:val.Link,
                    img:twitter,
                    alt:"twitter"

                })
            }
            if (val.TypeLink ==="youtube"&& val.Show =="true" ){
                dataArr.push({
                    url:val.Link,
                    img:youtube,
                    alt:"youtube"

                })
            }
            if (val.TypeLink ==="email"&& val.Show =="true" ){
                dataArr.push({
                    url:`mailto:${val.Link}`,
                    img:email,
                    alt:"email"

                })
            }
            if (val.TypeLink ==="linkedin"&& val.Show =="true" ){
                dataArr.push({
                    url:val.Link,
                    img:linkedin,
                    alt:"linkedin"

                })
            }
            if (val.TypeLink ==="instagram"&& val.Show =="true" ){
                dataArr.push({
                    url:val.Link,
                    img:instagram,
                    alt:"instagram"

                })
            }
        }
        setData(dataArr)
    }
    useEffect(()=>{
        getData()
    },[])
    const [scrollPosition, setScrollPosition] = useState(0);

    const openButton = useTransition(isOpen, null, {
        from: {
            opacity: 0,
            position: "absolute",
            height:"100%" ,
            top: 0,
            bottom: 0,
            right: 0,
            left: scrollPosition>61?-55 :-34
        },
        enter: {
            opacity: 1,
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: scrollPosition>61?-55 :-34
        },
        leave: { opacity: 0,  },
        config: config.default
    });

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header>
                <div className={scrollPosition>61?"fixs-menu":""}>
                    <div className='menu-desktop'>
                        <div className="menu-box">
                            <div className="menu-item">
                                <NavLink exact={true} to={'/'}>HOME</NavLink>
                            </div>
                            <div className="menu-item">
                                <NavLink to={'/about'}>ABOUT</NavLink>
                            </div>
                            <div className="menu-item">
                                <NavLink to={'/portfolio'}>Portfolio</NavLink>
                            </div>
                            <div className="menu-item">
                                <NavLink to={'/contact'}>contact</NavLink>
                            </div>
                        </div>
                        <div className="social-icon">
                            {data.map(el=>{
                                return <div className="social-item">
                                    <a href={el.url} target={'_blank'}>
                                        <img src={el.img} alt={el.alt}/>

                                    </a>
                                </div>
                            })}

                        </div>
                        <div className='button-menu'>
                            <div style={{ position:"relative", zIndex: 20 }}>
                                {openButton.map(({ item, key, props }) =>
                                    !item ? (
                                        <animated.div key={key} style={props}>
                                            <button style={styleToggleButton} onClick={toggleMenu}>
                                                <MdMenu />
                                            </button>
                                        </animated.div>
                                    ) : (
                                        <animated.div key={key} style={props}>
                                            <button style={styleToggleButton} onClick={toggleMenu}>
                                                <MdClose />
                                            </button>
                                        </animated.div>
                                    )
                                )}
                            </div>

                        </div>
                    </div>


            </div>
            {isOpen === true?null
            :<div className='main-fon'
                  style={{
                      backgroundImage:`url(${logoFon})`
                  }}
                >
                    <div className='main-logo '>
                        <img src={logo} className='img-fluid'  alt="logo"/>
                    </div>

                </div>
            }


        </header>
    )
}
export default Header
