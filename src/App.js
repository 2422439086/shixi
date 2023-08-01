import logo from './logo.svg';
import './App.css';
import { useState,useEffect} from 'react';
import { Button, Drawer } from 'antd';
import { Input } from 'antd';
import { Layout, Space } from 'antd';
import { Image } from 'antd';
import { Typography } from 'antd';
import { Col, Divider, Row } from 'antd';
import { Rate } from 'antd';
import Sider from 'antd/es/layout/Sider';
import Title from 'antd/es/typography/Title';

const { TextArea } = Input;


//layout style
const { Header, Content } = Layout;
const headerStyle = {
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
  padding: '20px 20px',
  color: 'black',
  backgroundColor: 'white',
};

//button style
const ButtonStyle = {
  textAlign: 'right',
  backgroundColor: 'red',
  color: 'white',
}
const ButtonCloseStyle = {
  backgroundColor: 'grey',
  color: 'white',
}

const dataSource=[
  {
    id: 1,
    image: 'https://preview.qiantucdn.com/58pic/40/86/03/88P58PICt6vC6E6DQZp46_PIC2018.jpg%21w1024_new_small',
    title: '肥牛米粉（大份） 1份',
    description: '柳州螺狮粉',
    price: 25,
    commemt: 'comment',
    rate: !'rate',
  },
  {
    id: 2,
    image: 'https://img.zcool.cn/community/01bd695ad6cc1aa801204029d4e982.jpg@2o.jpg',
    title: '铁板卤肉饭',
    description: '秋哥湘式铁板炒米粉米饭',
    price: 20,
    commemt: 'comment',
    rate: !'rate',
  },
  {
    id: 3,
    image: 'https://img1.baidu.com/it/u=2279026368,1623499517&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
    title: '香辣鸡排饭',
    description: '红布坊鸡排饭',
    price: 18.8,
    commemt: 'comment',
    rate: !'rate',
  },
]
const getDataSource=()=>{
  return dataSource;
}

function App() {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const data = getDataSource();
    setDataSource(data);
  }, []);

  const showComment = (index) => {
    const data = dataSource[index];
    if (!data) {
      return;
    }
    data.show = !data.show;
    setDataSource(dataSource.map(data => ({ ...data })));
  };

  const onChangeRate = (index, rate) => {
    // 将 dataSource 拷贝到局部变量 data
    const data = dataSource.map(d => ({ ...d }));
    data[index].rate = rate;
    data[index].isRate = true; 
    setDataSource(data);
  };

  const onChangeComment = (index, comment) => {
    const data = dataSource.map(d => ({ ...d }));
    data[index].comment = comment;
    setDataSource(data);
  };

  return (
    <div className="App">
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout>
          <Header style={headerStyle}>我的订单</Header>
         {
          dataSource.map((data,index)=>{
            return(
              <div key={index}>
                <Content style={contentStyle}>
                  <Row gutter={8}>
                    <Col className="gutter-row" span={3}>
                      <div>
                      <Image
                        width={150}
                        src={data.image}className="img"
                      />
                      </div>
                    </Col>
                    <Col className="gutter-row" span={3}>
                          <Title level={4}>{data.title}</Title>
                          <p>{data.description}</p>
                          <p>{data.price}</p>
                    </Col>
                    <Col className='gutter-row' span={3} offset={22}>
                      <Button
                        className='comment-button'
                        style={data.isRate ? ButtonCloseStyle : ButtonStyle}
                        onClick={() => showComment(index)} 
                      >
                        {data.isRate ? '已评价' : '评价'}
                      </Button>
                    </Col>
                    {
                      data.show?(
                        <div>
                         <TextArea
                          autoSize={true}
                          className='inputBoxBananaxxx'
                          id='bananaInputxx'
                          value={data.comment}
                          onChange={(e) => onChangeComment(index, e.target.value)}
                          disabled={data.isRate} 
                        />
                        <Rate
                          className='rateBoxBananasss'
                          id='rateBanana'
                          value={data.rate}
                          onChange={(value) => onChangeRate(index, value)}
                          disabled={data.isRate}
                        />
                        </div>
                      ):null
                    }
                  </Row>
                </Content>
                {index!==data.length?<Divider/>:null}
              </div>
            )
          })
        }
        </Layout>
      </Space>
    </div>
  );
}
export default App;