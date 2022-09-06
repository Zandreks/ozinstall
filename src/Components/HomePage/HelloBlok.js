import React, {useState,useEffect} from 'react'
import responseTamplase from "../../responseTamplase";

let HelloBlok = ()=>{
    let [data,setData] = useState({})
    let getData = async ()=>{
        let res = await responseTamplase("/api/rest/home/getObject/1",'get')
        if (!!res){
            setData(res)

        }
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <div className='hello-blok'>
            <h1>
                {data.Title}
            </h1>
            <div className='box-description'>
                <p>
                    {data.Description}
                </p>
            </div>
        </div>
    )
}
export default HelloBlok
