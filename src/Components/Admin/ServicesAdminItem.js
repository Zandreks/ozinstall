import React, {useState,useEffect} from "react";
import {Form, Input, Button, Upload, message} from 'antd';
import responseTamplase from "../../responseTamplase";
import axios from "axios";
let {TextArea} = Input
let ServicesAdminItem = ({el,getData})=> {
    const [fileList, setFileList] = useState(undefined);
    const [fileImg, setFileImg] = useState(undefined);
    const [fileName, setFileName] = useState('');

    const onFinish = async (values) => {
        if (fileList !== undefined){
            let fileData = new FormData()
            fileData.append("file",fileList)
            fileData.append("h",1200)
            axios.post('api/rest/upload/objectCreate', fileData,{
                headers:{
                    'Content-Type': 'multipart/form-data',
                    "x-access-token":localStorage.getItem('key')
                }
            }).then(async (res)=>{
                values.Prev = res.data.data.newName
                let result = await responseTamplase(`/api/rest/service/objectUpdate/${el.id}`,'put',values)
                getData()
            }).catch(error=>{
                message.error(error.response.data.message)
            })
        }else {
            let res = await responseTamplase(`/api/rest/service/objectUpdate/${el.id}`,'put',values)
            getData()
        }

    };
    let deleteItem = async (id)=>{
        let res = await responseTamplase(`/api/rest/service/objectDelete/${id}`,'delete')
        getData()
    }
    useEffect(()=>{
        if (!!el.Prev ){
            setFileName(el.Prev)
        }
    },[el])
    const propsFile = {
        multiple: false,
        onRemove: file => {
            setFileList([])
        },
        beforeUpload: file => {
            setFileList(file)
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.addEventListener("load", function () {
                // convert image file to base64 string
                setFileImg(reader.result)
            }, false);
            return false
        },
    }
    return(
        <Form
            name={`AboutCaruselAdmin${el.id}`}
            initialValues={{
                Title: el.Title,

                Description: el.Description,
            }}
            onFinish={onFinish}
            layout="vertical"

        >
            <Form.Item
                label="Title"
                name="Title"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Description"
                name="Description"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <TextArea autoSize={{
                    minRows: 6
                }}/>
            </Form.Item>
            <p>Preview</p>
            {fileName==="" && fileList===undefined?
                <Upload {...propsFile} >
                    <Button > Select a file </Button>
                </Upload>
                : fileList !==undefined?
                    <div >
                        <img src={fileImg} style={{
                            width:200,
                            height:200,
                            objectFit:"cover"
                        }} alt=""/>
                        <Button onClick={()=>{
                            setFileName('')
                            setFileList(undefined)
                        }}>
                            Delete
                        </Button>
                    </div>:
                    <div >
                        <img src={`/uploads/resized/${fileName}`} style={{
                            width:200,
                            height:200,
                            objectFit:"cover"
                        }} alt=""/>
                        <Button onClick={()=>{
                            setFileName('')
                            setFileList(undefined)
                        }}>
                            Delete
                        </Button>
                    </div>
            }
            <br/>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
                <Button onClick={() => {
                    deleteItem(el.id)
                }}>
                    Delete
                </Button>
            </Form.Item>
        </Form>
    )
}
export default ServicesAdminItem
