import React, {useEffect,useState} from "react";
import { Form, Input, Button,Checkbox } from 'antd';
import responseTamplase from "../../responseTamplase";
let {TextArea} = Input
let CovidAdmin = ()=>{
    let [data, setData] = useState(null)
    let getData = async () =>{
        let res = await responseTamplase("/api/rest/covid/getObject/1",'get')
        if (res){
            setData(res)
        }

    }
    const onFinish = async (values) => {
        let res = await responseTamplase("/api/rest/covid/objectUpdate/1",'put',values)

    };
    useEffect(()=>{
        getData()
    },[])
    return(
        <div className='admin-covid'>
            {data === null?"":
                <Form
                    name="covid"
                    initialValues={{
                        Title: data.Title,
                        Description: data.Description,
                        FooterTitle: data.FooterTitle,
                        Show: data.Show === "true"?true:false,
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
                        label="Description"
                        name="Description"
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
                        label="Footer Title"
                        name="FooterTitle"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item  name="Show" valuePropName="checked">
                        <Checkbox>Show</Checkbox>
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
export default CovidAdmin
