import React, {useEffect,useState} from "react";
import { Form, Input, Button } from 'antd';
import responseTamplase from "../../responseTamplase";
let {TextArea} = Input

let HomeServiceAdmin = ()=>{
    let [data, setData] = useState(null)
    let getData = async () =>{
        let res = await responseTamplase("/api/rest/homeService/getObject/1",'get')
        if (res){
            setData(res)
        }

    }
    const onFinish = async (values) => {
        let res = await responseTamplase("/api/rest/homeService/objectUpdate/1",'put',values)

    };
    useEffect(()=>{
        getData()
    },[])
    return(
        <div className='HomeServiceAdmin'>
            {data === null?"":
                <Form
                    name="HomeServiceAdmin"
                    initialValues={{
                        Title: data.Title,
                        Description: data.Description,
                        SubTitle: data.SubTitle,
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
                        label="SubTitle"
                        name="SubTitle"
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
export default HomeServiceAdmin
