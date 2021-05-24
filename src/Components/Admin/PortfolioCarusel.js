import React, {useState,useEffect} from "react";
import {  Button,Tabs } from 'antd';
import responseTamplase from "../../responseTamplase";
import PortfolioCaruselItem from "./PortfolioCaruselItem";

const { TabPane } = Tabs;

let PortfolioCarusel = ()=>{
    let [data, setData] = useState(null)
    let getData = async () =>{
        let res = await responseTamplase("/api/rest/portfoliocarusel/getObject/",'get')
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
        let res = await responseTamplase(`/api/rest/portfoliocarusel/objectCreate/`,'post',body)
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

                                <PortfolioCaruselItem el={el} getData={getData}/>
                            </TabPane>

                        )

                    })
                })
            </Tabs>


        </div>
    )
}
export default PortfolioCarusel
