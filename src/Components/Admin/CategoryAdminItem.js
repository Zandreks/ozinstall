import React, {useEffect} from "react";
import {Form, Input, Button} from 'antd';
import responseTamplase from "../../responseTamplase";
import ServicesAdmin from "./ServicesAdmin";

let CategoryAdminItem = ({el,getData})=> {

    const onFinish = async (values) => {
        let res = await responseTamplase(`/api/rest/category/objectUpdate/${el.id}`,'put',values)
        getData()

    };
    let deleteItem = async (id)=>{
        let res = await responseTamplase(`/api/rest/category/objectDelete/${id}`,'delete')
        getData()
    }

    return(
        <React.Fragment>

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
            <ServicesAdmin data={el.serviceId} getData={getData} id={el.id}/>
        </React.Fragment>

    )
}
export default CategoryAdminItem
