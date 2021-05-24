import React, {useState,useEffect} from "react";
import {Form, Input, Button, Checkbox} from 'antd';
import responseTamplase from "../../responseTamplase";

let ShareLinkAdminItem = ({el,getData})=> {
    const onFinish = async (values) => {
        let res = await responseTamplase(`/api/rest/shareLink/objectUpdate/${el.id}`,'put',values)
    };
    return(
        <Form
            name={`sosi${el.id}`}
            initialValues={{
                TypeLink: el.TypeLink,

                Show: el.Show === "true"?true:false,
            }}
            onFinish={onFinish}
            layout="vertical"

        >
            <Form.Item
                label="Title"
                name="TypeLink"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input disabled  />
            </Form.Item>


            <Form.Item  name="Show" valuePropName="checked">
                <Checkbox>Show</Checkbox>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>

            </Form.Item>
        </Form>
    )
}
export default ShareLinkAdminItem
