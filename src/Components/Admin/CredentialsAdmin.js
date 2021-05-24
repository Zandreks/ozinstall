import React, {useState,useEffect} from "react";
import { Form, Input, Button } from 'antd';
import responseTamplase from "../../responseTamplase";
let {TextArea} = Input

let CredentialsAdmin = ()=>{
    let [data, setData] = useState(null)
    let getData = async () =>{
        let res = await responseTamplase("/api/rest/contacts/getObject/1",'get')
        if (res){
            setData(res)
        }

    }
    const onFinish = async (values) => {
        let res = await responseTamplase("/api/rest/contacts/objectUpdate/1",'put',values)

    };
    useEffect(()=>{
        getData()
    },[])
    return(
        <div className='CredentialsAdmin'>
            {data === null?"":
                <Form
                    name="CredentialsAdmin"
                    initialValues={{
                        Title: data.Title,
                        Name:data.Name,
                        ABN:data.ABN,
                        Tel:data.Tel,
                        Email:data.Email,
                        Address:data.Address,
                        TitleForm:data.TitleForm,

                        DesriptionForm: data.DesriptionForm,
                        FooterForm: data.FooterForm,
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
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Name"
                        name="Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="ABN"
                        name="ABN"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Tel"
                        name="Tel"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="Email"
                        rules={[
                            {
                                required: true,
                                type:"email"
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Address"
                        name="Address"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Title Form"
                        name="TitleForm"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Desription Form"
                        name="DesriptionForm"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <TextArea autoSize={{
                            minRows:6
                        }}/>
                    </Form.Item>

                    <Form.Item
                        label="Footer Form"
                        name="FooterForm"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form.Item>
                </Form>


            }
        </div>

    )
}
export default CredentialsAdmin
