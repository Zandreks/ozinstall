import axios from "axios"
import {message} from "antd";
let responseTamplase = async (url,metod, json)=>{
    try{
        if (metod ==="get"){
            let res = await axios.get(url, {
                headers:{
                    "x-access-token":localStorage.getItem('key'),
                }
            })
            if (res.data.status === 200){
                return res.data.data
            }else {
                message.error(res.data.message)

                if(res.data.autch === false){
                    localStorage.clear()
                }
            }
        }
        else if(metod ==="post"){
            let res = await axios.post(url,json, {
                headers:{
                    "x-access-token":localStorage.getItem('key'),
                    "content-type":"application/json",
                }
            })
            if (res.data.status === 200){
                if (res.data.message !==''){
                    message.success(res.data.message)

                }
                return res.data.data
            }else {
                message.error(res.data.message)

                if(res.data.autch === false){
                    localStorage.clear()
                }
            }

        }
        else if(metod ==="put"){
            let res = await axios.put(url,JSON.stringify(json), {
                headers:{
                    "x-access-token":localStorage.getItem('key'),
                    "content-type":"application/json",
                }
            })
            if (res.data.status === 200){
                message.success(res.data.message)

                return res.data.data
            }else {
                message.error(res.data.message)

                if(res.data.autch === false){
                    localStorage.clear()

                }
            }
        }
        else if(metod ==="delete"){
            let res = await axios.delete(url, {
                headers:{
                    "x-access-token":localStorage.getItem('key'),
                }
            })
            if (res.data.status === 200){
                message.success(res.data.message)

                return res.data.data
            }else {
                message.error(res.data.message)

                if(res.data.autch === false){
                    localStorage.clear()
                }
            }
        }
    }catch (error) {
        message.error(error.response.data.message)

        if(error.response.data.autch === false){
            localStorage.clear()
        }
    }

}

export default responseTamplase
