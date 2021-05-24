import React,{useEffect} from 'react'
import { Form, Input, Button } from 'antd';
import responseTamplase from "../../responseTamplase";

let LoginPage = ({history})=>{
    const onFinish = async (values) => {
        let res = await responseTamplase("/api/rest/auth/signin",'post',values)
        if (res.accessToken){
            localStorage.setItem("key",res.accessToken)
            history.push('/admin')

        }
    };
    useEffect(()=>{
        if (localStorage.getItem('key') !== null){
            history.push('/admin')

        }
    },[])

    return(
        <div  className='login-page'>
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                layout="vertical"

            >
                <Form.Item
                    label="Username"
                    name="Login"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>



                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </div>
    )
}
export default LoginPage
