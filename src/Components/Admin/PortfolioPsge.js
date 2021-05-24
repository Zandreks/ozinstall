import React, {useState,useEffect} from "react";
import { Form, Input, Button } from 'antd';
import responseTamplase from "../../responseTamplase";
import ReactQuill, {Quill} from "react-quill";

var Block = Quill.import('blots/block');
Block.tagName = 'DIV';
Quill.register(Block, true);
let PortfolioPsge = ()=>{
    let [data, setData] = useState(null)
    let getData = async () =>{
        let res = await responseTamplase("/api/rest/portfolio/getObject/1",'get')
        if (res){
            setData(res)
        }

    }
    const onFinish = async (values) => {
        let res = await responseTamplase("/api/rest/portfolio/objectUpdate/1",'put',values)

    };
    useEffect(()=>{
        getData()
    },[])
    return(
        <div className='AboutPageAdmin'>
            {data === null?"":
                <Form
                    name="port"
                    initialValues={{
                        Title: data.Title,
                        Description: data.Description,
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
                        <ReactQuill  value={""} onChange={(va)=>null} />

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
export default PortfolioPsge
