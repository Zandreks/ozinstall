import React from "react";
import { Tabs } from 'antd';
import AdminHome from "../Components/Admin/AdminHome";
import CovidAdmin from "../Components/Admin/CovidAdmin";
import HomeServiceAdmin from "../Components/Admin/HomeServiseAdmin";
import CredentialsAdmin from "../Components/Admin/CredentialsAdmin";
import AboutPageAdmin from "../Components/Admin/AboutPageAdmin";
import AboutCaruselAdmin from "../Components/Admin/AboutCaruselAdmin";
import AboutServicesAdmin from "../Components/Admin/AboutServicesAdmin";
import CategoryAndServicesAdmin from "../Components/Admin/CategoryAndServicesAdmin";
import PartnerAdmin from "../Components/Admin/PartnersAdmin";
import {Link} from "react-router-dom";
import SosialLinkAdmin from "../Components/Admin/SosialLinkAdmin";
import ShareLinkAdmin from "../Components/Admin/ShareLinkAdmin";
import PortfolioPsge from "../Components/Admin/PortfolioPsge";
import PortfolioCarusel from "../Components/Admin/PortfolioCarusel";
import PortfolioVideo from "../Components/Admin/PortfolioVideo";

const { TabPane } = Tabs;

let AdminPage =  ()=>{
    return(
        <div className='admin-page'>
            <Tabs defaultActiveKey="1" >
                <TabPane tab="Covid info" key="1">
                    <CovidAdmin/>
                </TabPane>
                <TabPane tab="Home page" key="2">
                    <AdminHome/>
                </TabPane>

                <TabPane tab="Home page service info" key="3">
                    <HomeServiceAdmin/>
                </TabPane>

                <TabPane tab="About page" key="4">
                    <AboutPageAdmin/>
                </TabPane>
                <TabPane tab="About carousel" key="5">
                    <AboutCaruselAdmin/>
                </TabPane>
                <TabPane tab="About services" key="6">
                    <AboutServicesAdmin/>
                </TabPane>
                <TabPane tab="Category and Services" key="7">
                    <CategoryAndServicesAdmin/>
                </TabPane>
                <TabPane tab="Partner" key="8">
                    <PartnerAdmin/>
                </TabPane>
                <TabPane tab="Credentials " key="9">
                   <CredentialsAdmin/>
                </TabPane>
                <TabPane tab="Social networks " key="10">
                    <SosialLinkAdmin/>
                </TabPane>
                <TabPane tab="Share links " key="11">
                    <ShareLinkAdmin/>
                </TabPane>
                <TabPane tab="Portfolio page" key="12">
                    <PortfolioPsge/>
                </TabPane>
                <TabPane tab="Portfolio carousel" key="13">
                    <PortfolioCarusel/>
                </TabPane>
                <TabPane tab="Portfolio youtube video" key="14">
                    <PortfolioVideo/>
                </TabPane>
            </Tabs>
            <Link style={{
                marginLeft:10,
                marginTop:5
            }}   to={'/'} onClick={()=>{
                localStorage.clear()
            }}  className={"btn btn-primary"} >Sign Out</Link>
        </div>
    )
}
export default AdminPage
