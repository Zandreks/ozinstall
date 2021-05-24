import React, {useState,useEffect} from "react";
import { Tabs } from 'antd';
import responseTamplase from "../../responseTamplase";

import ShareLinkAdminItem from "./ShareLinkAdminItem";

const { TabPane } = Tabs;

let ShareLinkAdmin = ()=>{
    let [data, setData] = useState(null)
    let getData = async () =>{
        let res = await responseTamplase("/api/rest/shareLink/getObject/",'get')
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
                return <ShareLinkAdminItem el={el} getData={getData}/>
            }):""}
        </div>
    )
}
export default ShareLinkAdmin
