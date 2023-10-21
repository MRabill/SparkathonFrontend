import React from 'react';
import {
  Space,
  Table,
  Tag,
  Button,
  Col,
  Row,
  Typography,
  Mentions,
  Tooltip,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import COLORS from '../assets/color';
import { DownloadOutlined, FileImageOutlined } from '@ant-design/icons';
import GameOasis from './GameOasis';
const { Title, Text, Link } = Typography;
const { getMentions } = Mentions;

function Dashboard() {
  const navigate = useNavigate();
  const divStyle = {
    width: '300px',
    height: '200px',
    overflow: 'auto',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  };

  const cardStyle = {
    width: '100%',
    height: '100%',
    margin: '10px',
    padding: '0px',
    borderRadius: '10px',
    background: `${COLORS.background}`,
    boxShadow: '0px 8px 25px rgba(208, 210, 218, 0.8)',
  };

  return (
    // <div>
    // <Button type="primary" onClick={() =>  navigate("/first")}>Primary Button</Button>
    // <div style={divStyle}>
    //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
    //     <p>Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
    //     <p>Duis sagittis ipsum. Praesent mauris.</p>
    //     <p>Fusce nec tellus sed augue semper porta.</p>
    //     <p>Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
    //     <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
    //     <p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.</p>
    //     <p>Curabitur tortor. Pellentesque nibh. Aenean quam.</p>
    //     <p>In scelerisque sem at dolor.</p>
    //     <p>Mauris massa.</p>
    //     <p>Vestibulum lacinia arcu eget nulla.</p>
    //     <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
    //     <p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.</p>
    //     <p>Curabitur tortor. Pellentesque nibh. Aenean quam.</p>
    //     <p>In scelerisque sem at dolor.</p>
    // </div>
    // </div>

    <div style={{ height: '100vh' }}>
      <Row>
        <Col span={24}>
          <div style={{ width: '100%', height: '50px', background: 'red' }}>
            sdfgdsfg
          </div>
        </Col>
      </Row>
      <Row style={{ height: '100%' }} gutter={10}>
        <Col span={4}>
          <div style={cardStyle}>sdfgdsfg</div>
        </Col>
        <Col span={10} style={{ height: '100%' }}>
          <div style={{ height: '100%' }}>
            <Row span={10}>
              <div
                style={{
                  width: '100%',
                  margin: '10px',
                  padding: '0px',
                  borderRadius: '10px',
                  //   background: `${COLORS.background}`,
                }}
              >
                <Col>
                  <Title level={2}>Hello Kavish</Title>
                  <Title level={5} style={{ marginTop: '-5px' }}>
                    See What's Happening in Sdworx 👋{' '}
                  </Title>
                </Col>
              </div>
            </Row>
            <Row
              span={10}
              style={{
                width: '100%',
                margin: '10px',
                padding: '10px',
                borderRadius: '10px',
                background: `${COLORS.background}`,
                height: '200px',
                boxShadow: '0px 8px 25px rgba(208, 210, 218, 0.8)',
              }}
            >
              <Col style={{ width: '100%' }}>
                <Row>
                  <Col>
                    <Title level={5}>Create post</Title>
                  </Col>
                </Row>
                <Mentions
                  rows={3}
                  placeholder="You can use @ to ref user here"
                  options={[
                    {
                      value: 'KavishMojoa',
                      label: 'KavishMojoa',
                    },
                    {
                      value: 'AyushPravesh',
                      label: 'AyushPravesh',
                    },
                    {
                      value: 'RabillMadarboccus',
                      label: 'RabillMadarboccus',
                    },
                    {
                      value: 'AshfaaqJowaheer',
                      label: 'AshfaaqJowaheer',
                    },
                  ]}
                />
                <Row></Row>
                {/* <Row >
    <div style={{display:'flex', alignItems: 'center', justifyContent:'center',marginTop: '10px', gap:'10px'}}>
    <Button className='custom-button-hover' type="primary" shape="round" size={'large'} style={{paddingTop: '5px'}} textHoverBg={'red'}>
                  <img
                    src="https://i.ibb.co/wJ7Qf2m/02.png"
                    alt="Logo"
                    width="25"
                  ></img>
                </Button>
               
                <Text strong style={{margin: 0, color: '#9B9B9B'}}>422 Sparks</Text>
    </div>

</Row> */}
                <Row style={{ marginTop: '10px' }} gutter={16} >
                    <Col >
                    <Tooltip title="search" >
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<FileImageOutlined style={{ color: '#9B9B9B' }} />}
                    />
                  </Tooltip>
                  <Text strong style={{ margin: 0, color: '#9B9B9B'  }}>
                    Image
                  </Text>
                    </Col>
                 <Col>
                 <Tooltip title="search">
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<FileImageOutlined style={{ color: '#9B9B9B' }} />}
                    />
                  </Tooltip>
                  <Text strong style={{ margin: 0, color: '#9B9B9B' }}>
                    Document
                  </Text>
                 </Col>
                 
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={10}>
          <div style={cardStyle}><GameOasis/></div>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
