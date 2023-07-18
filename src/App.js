import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button,Drawer } from 'antd';
import { Input } from 'antd';
import { Layout, Space } from 'antd';
import { Image } from 'antd';
import { Typography } from 'antd';
import { Col, Divider, Row } from 'antd';
import { Rate } from 'antd';

const { TextArea } = Input;

const { Title } = Typography;

//layout style
const { Header,Content } = Layout;
const headerStyle= {
  textAlign: 'center',
  color: 'white',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: 'red',
};
const contentStyle = {
  textAlign: 'left',
  minHeight: 50,
  padding:'20px 20px',
  color: 'black',
  backgroundColor: 'white',
};

//button style
const ButtonStyle={
  textAlign:'right',
  backgroundColor:'red',
  color:'white',
}
const ButtonCloseStyle={
  backgroundColor:'grey',
  color:'white',
}

function App() {
  //评价button响应
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const closeDrawer = () => {
    setOpen(false);
  };

  const [open2, setOpen2] = useState(false);
  const showDrawer2 = () => {
    setOpen2(true);
  };
  const closeDrawer2 = () => {
    setOpen2(false);
  };  

  const [open3, setOpen3] = useState(false);
  const showDrawer3 = () => {
    setOpen(true);
  };
  const closeDrawer3 = () => {
    setOpen(false);
  };

  //控制drawer
  const [isOpen,setIsOpen]=useState(false);
  //已评价button响应
  const [OpenText,setOpenText]=useState(false);
  const [OpenRate,setOpenRate]=useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  const handleButtonClick=()=>{
    if(!OpenText&&!OpenRate){
      setIsOpen(!isOpen);
      setOpen(false);
    }
    else{
      setOpenText(true);
      setOpenRate(true);
      setInputDisabled(true);
    }
  }

  const [isOpen2,setIsOpen2]=useState(false);
  const handleButtonClick2=()=>{
    setIsOpen2(!isOpen2);
    setOpen2(false);
  }

  const [isOpen3,setIsOpen3]=useState(false);
  const handleButtonClick3=()=>{
    setIsOpen3(!isOpen3);
    setOpen3(false);
  }

  return (
    <div className="App">
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout>
          <Header style={headerStyle}>我的订单</Header>
          <Layout hasSider>
            <Content style={contentStyle}>
{/* 第一个 */}
              <Row gutter={8}>
                <Col className="gutter-row" span={3}>
                  <div>
                    <Image
                      width={150}
                      src="https://preview.qiantucdn.com/58pic/40/86/03/88P58PICt6vC6E6DQZp46_PIC2018.jpg%21w1024_new_small"
                    />
                  </div>
                </Col>
                <Col className="gutter-row" span={3}>
                  <div>
                    <Title level={4}>肥牛米粉（大份） 1份</Title>
                    <p>柳州螺狮粉</p>
                    <p>￥25</p>
                  </div>
                </Col>
                <Col className='gutter-row' span={3} offset={22}>
                  <Button type="primary" onClick={showDrawer} style={isOpen ? ButtonCloseStyle : ButtonStyle}>
                    {isOpen||(OpenText&&OpenRate) ? '已评价' : '评价'}
                  </Button>
                </Col>
              </Row>
              <Divider></Divider>
              <Drawer placement="bottom" onClose={closeDrawer} open={open}>
                <TextArea rows={4} maxLength={6} disabled={inputDisabled}/>
                <br />
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Rate />
                </Space>
                <Button type="primary" onClick={handleButtonClick} style={ButtonStyle}>
                  提交
                </Button>
                <Button onClick={handleButtonClick} style={ButtonCloseStyle}>
                  取消
                </Button>
              </Drawer>
{/* 第二个 */}
              <Row gutter={8}>
                <Col className="gutter-row" span={3}>
                  <div>
                    <Image
                      width={150}
                      src="https://img.zcool.cn/community/01bd695ad6cc1aa801204029d4e982.jpg@2o.jpg"
                    />
                  </div>
                </Col>
                <Col className="gutter-row" span={3}>
                  <div>
                    <Title level={4}>铁板卤肉饭</Title>
                    <p>秋哥湘式铁板炒米粉米饭</p>
                    <p>￥20</p>
                  </div>
                </Col>
                <Col className='gutter-row' span={3} offset={22}>
                  <Button type="primary" onClick={showDrawer2} style={isOpen2 ? ButtonCloseStyle : ButtonStyle}>
                    {isOpen2 ? '已评价' : '评价'}
                  </Button>
                </Col>
              </Row>
              <Divider></Divider>
              <Drawer placement="bottom" onClose={closeDrawer2} open={open2}>
                <TextArea rows={4} maxLength={6}/>
                <br />
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Rate />
                </Space>
                <Button type="primary" onClick={handleButtonClick2} style={ButtonStyle}>
                  提交
                </Button>
                <Button onClick={handleButtonClick2} style={ButtonCloseStyle}>
                  取消
                </Button>
              </Drawer>
    {/* 第三个 */}
              <Row gutter={8}>
                <Col className="gutter-row" span={3}>
                  <div>
                    <Image
                      width={150}
                      src="https://img1.baidu.com/it/u=2279026368,1623499517&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500"
                    />
                  </div>
                </Col>
                <Col className="gutter-row" span={3}>
                  <div>
                    <Title level={4}>香辣鸡排饭</Title>
                    <p>红布坊鸡排饭</p>
                    <p>￥15</p>
                  </div>
                </Col>
                <Col className='gutter-row' span={3} offset={22}>
                  <Button type="primary" onClick={showDrawer3} style={isOpen3 ? ButtonCloseStyle : ButtonStyle}>
                    {isOpen3 ? '已评价' : '评价'}
                  </Button>
                </Col>
              </Row>
              <Divider></Divider>
              <Drawer placement="bottom" onClose={closeDrawer3} open={open3}>
                <TextArea rows={4} maxLength={6}/>
                <br />
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Rate />
                </Space>
                <Button type="primary" onClick={handleButtonClick3} style={ButtonStyle}>
                  提交
                </Button>
                <Button onClick={handleButtonClick3} style={ButtonCloseStyle}>
                  取消
                </Button>
              </Drawer>
            </Content>
          </Layout>
        </Layout>
      </Space>
    </div>
  );
}

export default App;