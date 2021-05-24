import React, {useState} from "react";
import { Form, Input, Button } from 'antd';
import responseTamplase from "../../responseTamplase";
import img from '../../Assets/img/youtubev.png'
let PortfolioVideoItem = ({el,getData})=>{
    let [videoId, setVideoId] = useState("")
    const onFinish = async (values) => {
        let res = await responseTamplase(`/api/rest/portfoliovideo/objectUpdate/${el.id}`,'put',values)

    };
    let deleteItem = async (id)=>{
        let res = await responseTamplase(`/api/rest/portfoliovideo/objectDelete/${id}`,'delete')
        getData()
    }

    return(
        <div className='vid'>
                <Form
                    name={`PortfolioVideoItem${el.id}`}
                    initialValues={{
                        Title: el.Title,
                        VideoId: el.VideoId,

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
                        label="Youtube video id"
                        name="VideoId"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input onChange={(val)=>setVideoId(val.target.value)}/>
                    </Form.Item>
                    <p >
                        Go to YouTube.com, look for the video you want, open it and there will be a share button under the video. Click and copy the last part of the link. This is the video ID
                    </p>
                    <img className='img-fluid' style={{
                        maxWidth:400
                    }} src={img} alt="img"/>
                    <br/>
                    <br/>
                    <p>
                        Preview
                    </p>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div
                                className="video"
                                style={{
                                    position: "relative",
                                    paddingBottom: "56.25%" /* 16:9 */,
                                    paddingTop: 25,
                                    height: 0,
                                    marginTop:10,

                                }}
                            >
                                <iframe
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%"
                                    }}
                                    src={`https://www.youtube.com/embed/${videoId ===''?el.VideoId:videoId}`}
                                    frameBorder="0"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <Form.Item >
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

        </div>
    )
}
export default PortfolioVideoItem
