import React, {useState,useEffect} from "react";
import {  Button,Tabs } from 'antd';
import responseTamplase from "../../responseTamplase";
import CategoryAdminItem from "./CategoryAdminItem";
import PartnerAdminItem from "./PartnerAdminItem";

const { TabPane } = Tabs;

let PartnersAdmin = ()=>{
    let [data, setData] = useState(null)
    let getData = async () =>{
        let res = await responseTamplase("/api/rest/partners/getObject/",'get')
        if (res){
            setData(res)
        }

    }

    let addItem = async ()=>{
        let body =  {
            Title:"New partner",
            Logo:"",
            Link:"",

        }
        let res = await responseTamplase(`/api/rest/partners/objectCreate/`,'post',body)
        getData()
    }
    useEffect(()=>{
        getData()
    },[])
    const operations = <Button onClick={addItem}>Add partner</Button>;

    return(
        <div  className='AboutCaruselAdmin'>
            <Tabs tabBarExtraContent={operations}  >
                {data === null?"":
                    data.map(el=> {
                        return (
                            <TabPane tab={el.Title} key={el.id}>

                                <PartnerAdminItem el={el} getData={getData}/>
                            </TabPane>

                        )

                    })
                })
            </Tabs>


        </div>
    )
}
export default PartnersAdmin
