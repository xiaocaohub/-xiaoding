import React from "react";
import {Button, Carousel, Tabs, Radio,Spin,Upload,message,Badge,Tooltip,Divider, Space, Breadcrumb, Switch } from "antd"; 
import Good from "../../components/Good";

import { FaBeer } from 'react-icons/fa';
import { DownloadOutlined,StepBackwardOutlined,AndroidOutlined  } from '@ant-design/icons';
import {Icon} from "@ant-design/compatible";

import Shadow from "../Shadow";

import "./index.css";
const { TabPane } = Tabs;
class Show extends React.Component {
    constructor (props) {   
        super(props)
        this.state = {
            value:1,
            size: 'small' ,
            isLoading: false
        }
        this.prev = this.prev.bind(this)
    }

    onChange = (a, b, c)=> {
        console.log(a, b, c);
    }
    prev  ()  {
        this.img.prev()
    }
    slectChange = (e)=> {
        const _this = this;
        this.setState({isLoading: true})
        setTimeout(function () { _this.setState({isLoading: false })}, 2000)
    }
    itemRender = (e)=>{
        console.log(e)
    }



    switchFn = (e)=> {
        console.log(e)
    }
    render () {
        const {count} = this.props.loginState;
        const props = {

            name: 'file',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
              authorization: 'authorization-text',
            },
            onChange(info) {
              if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
              }
              if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
              } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
              }
            }
        }
        return (
            <div>
                <Icon type="close-circle" />
                <AndroidOutlined    className="icon_big"/>
                <Button type="primary" danger>Primary</Button>
                <Button type="primary" icon={<StepBackwardOutlined />}   />
                <h1>login page-------{count}</h1>
                <Button onClick={this.props.addFn}>click me</Button>
                
                <Carousel  ref={dom=>{this.img=dom }} className="slick-list" autoplay>    
                    <div key={1}><h3>1</h3></div>
                    <div key={2}><h3>2</h3></div>
                    <div key={3}><h3>3</h3></div>
                    <div key={4}><h3>4</h3></div>
                </Carousel>
                <Button onClick={this.prev}>left</Button>

                <div> 
                    <Radio.Group defaultValue="a" buttonStyle="solid" onChange={this.slectChange} >
                        <Radio.Button value="a" >Hangzhou</Radio.Button>
                        <Radio.Button value="b" >Shanghai</Radio.Button>
                        <Radio.Button value="c"  >Beijing</Radio.Button>
                        <Radio.Button value="d"  >Chengdu</Radio.Button>
                    </Radio.Group>
                </div>
                
                {this.state.isLoading&&<Shadow/>} 
                <div>

                    <Upload {...props}>
                        <Button>
                            Click to Upload
                        </Button>
                    </Upload>
                </div>

                <div className="icon_con">
                    <Badge count={200}  overflowCount={999}>
                        <div className="box"></div>
                    </Badge>
                </div>

                
                <Tooltip title="prompt text">
                    <span>小丁</span>
                </Tooltip>




                <Divider orientation="right" >Right Text</Divider>
                <Space align="start"   size="large" wrap={true}>
                    <Button type="primary" danger>Primary</Button>
                    <Button type="primary" danger>Primary</Button>
                </Space>
               
                 
                 
                    <Breadcrumb itemRender={this.itemRender}>
                  
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="/login">Application Center</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                       
                            <a href="/home">Application List</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>An Application</Breadcrumb.Item>
                    </Breadcrumb>
            
                <Switch onChange={this.switchFn}  />
            </div>
        )
    }
}







export default Show;