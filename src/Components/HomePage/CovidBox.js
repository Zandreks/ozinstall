import React, {useState,useEffect} from 'react'
import responseTamplase from "../../responseTamplase";

let CovidBox =()=> {
    let [data,setData] = useState({})
    let getData = async ()=>{
        let res = await responseTamplase("/api/rest/covid/getObject/1",'get')
        if (!!res){
            setData(res)

        }
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <div className='covid-box'>
            <div className='title'>
                {data.Title}
            </div>
            <p className='description'>
                {data.Description}
            </p>
            <div className='text-footer'>
                {data.FooterTitle}
            </div>
        </div>
    )
}

export default CovidBox
