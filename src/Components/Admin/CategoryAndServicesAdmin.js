import React, {useState,useEffect} from "react";
import {  Button,Tabs } from 'antd';
import responseTamplase from "../../responseTamplase";
import CategoryAdminItem from "./CategoryAdminItem";

const { TabPane } = Tabs;

let CategoryAndServicesAdmin = ()=>{
    let [data, setData] = useState(null)
    let getData = async () =>{
        let res = await responseTamplase("/api/rest/category/getObject/",'get')
        if (res){
            setData(res)
        }

    }

    let addItem = async ()=>{
        let body =  {
            Title:"New category",
            Description:"",
        }
        let res = await responseTamplase(`/api/rest/category/objectCreate/`,'post',body)
        getData()
    }
    useEffect(()=>{
        getData()
    },[])
    const operations = <Button onClick={addItem}>Add category</Button>;

    return(
        <div  className='AboutCaruselAdmin'>
            <Tabs tabBarExtraContent={operations}  >
                {data === null?"":
                    data.map(el=> {
                        return (
                            <TabPane tab={el.Title} key={el.id}>

                                <CategoryAdminItem el={el} getData={getData}/>
                            </TabPane>

                        )

                    })
                })
            </Tabs>


        </div>
    )
}
export default CategoryAndServicesAdmin
