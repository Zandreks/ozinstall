import React, {useState,useEffect,useReducer} from 'react'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useTransition, animated, config } from "react-spring";
import {NavLink} from "react-router-dom";
import {Context} from '../../context'
import reducer from '../../reduser'
import Modal from "antd/es/modal/Modal";
import {Button} from "antd";
import CovidBox from "../HomePage/CovidBox";
import responseTamplase from "../../responseTamplase";
let initialState = {
 contacts:{},
    covid:""
}
let Layout = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(false);
    let getCovid = async ()=>{
        let res = await responseTamplase("/api/rest/covid/getObject/1",'get')
        dispatch({
            type: 'onchangeCovid',
            data: res.Show
        })
        if (res.Show =="true"){
            showModal()

        }
    }
    let getContact =  async ()=>{
        let res = await responseTamplase("/api/rest/contacts/getObject/1",'get')
        dispatch({
            type: 'onchangeContacts',
            data: res
        })
    }
    useEffect(()=>{
        getCovid()
        getContact()
    },[])
    let showModal = () => {
        setShow(true)
    };

    let handleOk = () => {
        setShow(false)
    };

   let handleCancel = () => {
       setShow(false)
    };

    const fullscreenMenu = useTransition(isOpen, null, {
        from: {
            opacity: 0,
            transform: "scale(0.80)"
        },
        enter: {
            opacity: 1,
            transform: "scale(1)",
            background: "#fff",
            position: "absolute",
            height:"100%" ,
            top: 0,
            bottom: 0,
            right: 0,
            left: 0
        },
        leave: { opacity: 0, transform: "scale(0.80)" },
        config: config.gentle
    });
    return (
        <Context.Provider value={{
            dispatch,
            state
        }}>
        <div className='LayoutComponent'>

            <div className='container-fluid'>
                <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
                {isOpen ===true?null:<>
                    {props.children}
                    <Footer/>
                </>}

            </div>
            {fullscreenMenu.map(
                ({ item, key, props }) =>
                    item && (
                        <animated.div key={key} style={props}>
                            <ul
                                className='mobile-menu'
                                style={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 0,
                                    margin: 0,
                                    listStyle: "none",
                                    overflow: "hidden",
                                    textAlign: "left"
                                }}
                            >
                                <div onClick={()=>{
                                    setIsOpen(false)
                                }} className="menu-item">
                                    <NavLink exact={true} to={'/'}>HOME</NavLink>
                                </div>
                                <div onClick={()=>{
                                    setIsOpen(false)
                                }}  className="menu-item">
                                    <NavLink to={'/about'}>ABOUT</NavLink>
                                </div>
                                <div onClick={()=>{
                                    setIsOpen(false)
                                }}  className="menu-item">
                                    <NavLink to={'/portfolio'}>Portfolio</NavLink>
                                </div>
                                <div onClick={()=>{
                                    setIsOpen(false)
                                }}  className="menu-item">
                                    <NavLink to={'/contact'}>contact</NavLink>
                                </div>
                              <div className='action-link-mobile'>
                                  <div className='item-link'>
                                      <a href={`mailto:${state.contacts.Email}`}>
                                          Free Quote
                                      </a>
                                  </div>
                                  <div className='item-link'>
                                      <a href={`tel:${state.contacts.Tel}`}>
                                          Call
                                      </a>
                                  </div>
                              </div>
                            </ul>
                        </animated.div>
                    )
            )}
            <Modal
                visible={show}
                title="Covid -19"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[

                    <Button key="submit"  onClick={handleOk}>
                        Ok
                    </Button>,
                ]}
            >
                <CovidBox/>
            </Modal>

        </div>
        </Context.Provider>
    )
}
export default Layout
