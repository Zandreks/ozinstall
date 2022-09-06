import React, {useState,useEffect,useContext} from 'react'
import {NavLink} from "react-router-dom";
import facebook from '../../../Assets/img/facebook.png'
import twitter from '../../../Assets/img/twitter.png'
import youtube from '../../../Assets/img/youtube.png'
import email from '../../../Assets/img/email.png'
import linkedin from '../../../Assets/img/linkedin.png'
import instagram from '../../../Assets/img/instagram.png'
import logo from '../../../Assets/img/logoF.png'
import moment from "moment";
import {Context} from "../../../context";
import responseTamplase from "../../../responseTamplase";

let Footer = () =>{
    let [data,setData] = useState([])
    let getData = async ()=>{
        let res = await responseTamplase("/api/rest/shareLink/getObject",'get')
        if (!!res){
            let dataArr = []

            for (let val of res){
                if (val.TypeLink ==="facebook"&& val.Show =="true" ){
                    dataArr.push({
                        url:`https://www.facebook.com/sharer/sharer.php?u=${window.location.hostname}`,
                        img:facebook,
                        alt:"facebook"
                    })
                }
                if (val.TypeLink ==="twitter"&& val.Show =="true" ){
                    dataArr.push({
                        url:`https://twitter.com/share?url=${window.location.hostname}`,
                        img:twitter,
                        alt:"twitter"

                    })
                }
                if (val.TypeLink ==="youtube"&& val.Show =="true" ){
                    dataArr.push({
                        url:``,
                        img:youtube,
                        alt:"youtube"

                    })
                }
                if (val.TypeLink ==="email"&& val.Show =="true" ){
                    dataArr.push({
                        url:`mailto:`,
                        img:email,
                        alt:"email"

                    })
                }
                if (val.TypeLink ==="linkedin"&& val.Show =="true" ){
                    dataArr.push({
                        url:`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.hostname}`,
                        img:linkedin,
                        alt:"linkedin"

                    })
                }
                if (val.TypeLink ==="instagram"&& val.Show =="true" ){
                    dataArr.push({
                        url:`https://www.instagram.com`,
                        img:instagram,
                        alt:"instagram"

                    })
                }
            }
            setData(dataArr)
        }

    }
    useEffect(()=>{
        getData()
    },[])
    const {state} = useContext(Context)
    let {contacts} = state
    return(
        <footer>
            <div className='content-box'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='title'>
                            navigation
                        </div>
                        <div className='navigation-footer'>
                            <div className="menu-item">
                                <NavLink to={'/'}>HOME</NavLink>
                            </div>
                            <div className="menu-item">
                                <NavLink to={'/services'}>SERVICES</NavLink>
                            </div>
                            <div className="menu-item">
                                <NavLink to={'/about'}>ABOUT</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='title'>
                            get in touch
                        </div>
                        <div className='description'>
                            tel:<a href={`tel:${contacts.Tel}`}>{contacts.Tel}</a><br/>
                            email:<a href={`mailto:${contacts.Email}`}>{contacts.Email}</a>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='title'>
                            share this page
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

                    </div>
                </div>
                <div className='box-footer-logo'>
                    <div className='main-logo '>
                        <img src={logo} className='img-fluid'  alt="logo"/>
                        <div className='copy'>
                            © All rights reserved, OzInstall PTY LTD {moment().format('YYYY')}

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

}
export default Footer
