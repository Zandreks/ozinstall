import React, {useState,useEffect} from "react";
import {  Button,Tabs } from 'antd';
import responseTamplase from "../../responseTamplase";
import CategoryAdminItem from "./CategoryAdminItem";
import PartnerAdminItem from "./PartnerAdminItem";
import SosialLinkAdminItem from "./SosialLinkAdminItem";

const { TabPane } = Tabs;

let SosialLinkAdmin = ()=>{
    let [data, setData] = useState(null)
    let getData = async () =>{
        let res = await responseTamplase("/api/rest/sosioallink/getObject/",'get')
        if (res){
            setData(res)
        }

    }


    useEffect(()=>{
        getData()
    },[])

    return(
        <div  className='AboutCaruselAdmin'>
            {data !== null? data.map(el=>{
                return <SosialLinkAdminItem el={el} getData={getData}/>
            }):""}
        </div>
    )
}
export default SosialLinkAdmin
