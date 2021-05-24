import React, {useState,useEffect} from "react";
import {  Button,Tabs } from 'antd';
import responseTamplase from "../../responseTamplase";
import AboutServicesAdminItem from "./AboutServicesAdminItem";

const { TabPane } = Tabs;

let AboutServicesAdmin = ()=>{
    let [data, setData] = useState(null)
    let getData = async () =>{
        let res = await responseTamplase("/api/rest/aboutcolum/getObject/",'get')
        if (res){
            setData(res)
        }

    }

    let addItem = async ()=>{
        let body =  {
            Title:"New item",
            Prev:"",
            Description:"",
        }
        let res = await responseTamplase(`/api/rest/aboutcolum/objectCreate/`,'post',body)
        getData()
    }
    useEffect(()=>{
        getData()
    },[])
    const operations = <Button onClick={addItem}>Add item</Button>;

    return(
        <div  className='AboutCaruselAdmin'>
            <Tabs tabBarExtraContent={operations}  >
                {data === null?"":
                    data.map(el=> {
                        return (
                            <TabPane tab={el.Title} key={el.id}>

                                <AboutServicesAdminItem el={el} getData={getData}/>
                            </TabPane>

                        )

                    })
                })
            </Tabs>


        </div>
    )
}
export default AboutServicesAdmin
