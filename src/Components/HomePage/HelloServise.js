import React, {useState,useEffect} from 'react'
import { Collapse } from 'antd';
import ServiseItem from "../Servises/ServiseItem";
import responseTamplase from "../../responseTamplase";
const { Panel } = Collapse;
let HelloServise = () =>{
    let [data,setData] = useState({})
    let [dataCategory,setDataCatgory] = useState([])
    let getData = async ()=>{
        let res = await responseTamplase("/api/rest/homeService/getObject/1",'get')
        if (!!res){
            setData(res)

        }
    }
    let getDataCategory = async ()=>{
        let res = await responseTamplase("/api/rest/category/getObject",'get')
        if (!!res){
            setDataCatgory(res)

        }
    }
    useEffect(()=>{
        getData()
        getDataCategory()
    },[])


    return(
        <div className="hello-services">
            <h2>
                {data.Title} <span>  {data.SubTitle} </span>
            </h2>
            <div className='box-description'>
                <p>
                    {data.Description}
                </p>
                <div  className='list-servises-home'>

                    <Collapse  ghost>
                        {dataCategory.map((el,key)=>{
                            return(
                                <Panel   showArrow={false} header={el.Title} key={key}>

                                    <ServiseItem  data={el.serviceId}/>

                                </Panel>
                            )
                        })}
                    </Collapse>

                </div>
            </div>

        </div>
    )
}
export default HelloServise
