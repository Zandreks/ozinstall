import React, {useState,useEffect} from 'react'
import responseTamplase from "../../responseTamplase";
import {Form, Input, Button, message} from 'antd';
let  {TextArea}= Input

let Credentials = ({showContact}) => {
    let [data,setData] = useState({})
    let getData = async ()=>{
        let res = await responseTamplase("/api/rest/contacts/getObject/1",'get')
        setData(res)
    }
    useEffect(()=>{
        getData()
    },[])
    const [form] = Form.useForm();

    const onFinish = async (values) => {

        let res = await responseTamplase('/api/rest/contacts/contactUs','post',values)
        if (!!res){
            form.resetFields()
            message.success("Your quote accepted")
        }
        console.log('Received values of form: ', values);
    };

    return (
        <div className='Credentials-box'>
            <div className='row'>
                {showContact === false?null:                <div className='col-md-6'>
                    <div className='title'>
                        {data.Title}
                    </div>
                    <div className='info-box'>
                        <div className='row'>
                            <div className='key col-sm-3'>
                                Name:
                            </div>
                            <div className='value col-sm-9'>
                                {data.Name}
                            </div>
                        </div>
                        <div className='row'>

                            <div className='key col-sm-3'>
                                ABN:
                            </div>
                            <div className='value col-sm-9'>
                                {data.ABN}
                            </div>
                        </div>
                        <div className='row'>

                            <div className='key col-sm-3'>
                                Tel:
                            </div>
                            <div className='value col-sm-9'>
                                <a href={`tel:${data.Tel}`}>  {data.Tel}</a>
                            </div>
                        </div>
                        <div className='row'>

                            <div className='key col-sm-3'>
                                E-mail:
                            </div>
                            <div className='value col-sm-9'>
                                <a href={`mailto:${data.Email}`}>  {data.Email}</a>
                            </div>
                        </div>
                        <div className='row'>

                            <div className='key col-sm-3'>
                                Address:
                            </div>
                            <div className='value col-sm-9'>
                                {data.Address}
                            </div>
                        </div>
                        <div className='map'>
                            <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6589.580380486168!2d150.78382495078188!3d-34.096169685513125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12efece28ab253%3A0x216304a512759c00!2s3%20Merdle%20Pl%2C%20Ambarvale%20NSW%202560%2C%20Australia!5e0!3m2!1sen!2skz!4v1611406555313!5m2!1sen!2skz"
    width="100%" height="350" frameBorder="0" style={{border: 0}} allowFullScreen=""
    aria-hidden="false" tabIndex="0"/>
                        </div>
                    </div>

                </div>}

                <div className={`col-md-6`}>
                    <div className='title'>
                        {data.TitleForm}
                    </div>
                    <div className='description'>
                        {data.DesriptionForm}
                    </div>
                    <div className='sub-action'>
                        {data.FooterForm}
                    </div>
                    <Form
                        name="normal_login"
                        form={form}
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="Email"
                            rules={[
                                {
                                    required: true,
                                    type:"email"
                                },
                            ]}
                        >
                            <Input  placeholder="Your E-mail.." />
                        </Form.Item>
                        <Form.Item
                            name="Subject"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input
                                placeholder="Subject.."
                            />
                        </Form.Item>
                        <Form.Item
                            name="Message"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <TextArea autoSize={{
                                minRows:6
                            }}
                                placeholder="Message.."
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Submit
                            </Button>

                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default Credentials
