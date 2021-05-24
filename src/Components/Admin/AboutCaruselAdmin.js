import React, {useState,useEffect} from "react";
import {  Button,Tabs } from 'antd';
import responseTamplase from "../../responseTamplase";
import AboutCaruselAdminItem from "./AboutCaruselAdminItem";

const { TabPane } = Tabs;

let AboutCaruselAdmin = ()=>{
    let [data, setData] = useState(null)
    let getData = async () =>{
        let res = await responseTamplase("/api/rest/aboutcarusel/getObject/",'get')
        if (res){
            setData(res)
        }

    }

    let addItem = async ()=>{
        let body =  {
            Title:"New carousel",
            Prev:"",
            Description:"",
            FooterDescription:""
        }
        let res = await responseTamplase(`/api/rest/aboutcarusel/objectCreate/`,'post',body)
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

                            <AboutCaruselAdminItem el={el} getData={getData}/>
                        </TabPane>

                    )

                })
            })
            </Tabs>


        </div>
    )
}
export default AboutCaruselAdmin
