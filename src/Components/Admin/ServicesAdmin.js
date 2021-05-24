import React, {useState,useEffect} from "react";
import {  Button,Tabs } from 'antd';
import responseTamplase from "../../responseTamplase";
import ServicesAdminItem from "./ServicesAdminItem";

const { TabPane } = Tabs;

let ServicesAdmin = ({id,data,getData})=>{


    let addItem = async ()=>{
        let body =  {
            Title:"New service",
            Description:"",
            Prev:"",
            categoryId:id
        }
        let res = await responseTamplase(`/api/rest/service/objectCreate/`,'post',body)
        getData()
    }
    useEffect(()=>{
        getData()
    },[])
    const operations = <Button onClick={addItem}>Add service</Button>;

    return(
        <div  className='AboutCaruselAdmin'>
            <Tabs tabBarExtraContent={operations}  >
                {data === null?"":
                    data.map(el=> {
                        return (
                            <TabPane tab={el.Title} key={el.id}>

                                <ServicesAdminItem el={el} getData={getData}/>
                            </TabPane>

                        )

                    })
                })
            </Tabs>


        </div>
    )
}
export default ServicesAdmin
