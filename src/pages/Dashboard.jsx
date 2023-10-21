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

const { Title, Text, Link } = Typography;
const { getMentions } = Mentions;
const imageSrc =
  'https://media.licdn.com/dms/image/D5603AQFUdBEoOr0TYw/profile-displayphoto-shrink_800_800/0/1683227440776?e=2147483647&v=beta&t=GAMl8mBOLqI7mRv-rdLFaY0kwpnqVyVPGh6WtFehFEY';

const PostComp = () => {};

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
                height: '175px',
                boxShadow: '0px 8px 25px rgba(208, 210, 218, 0.8)',
              }}
              // style={divStyle}}
            >
              <Col style={{ width: '100%' }}>
                <Row>
                  <Col>
                    <Title level={5}>Create post</Title>
                  </Col>
                </Row>
                <Mentions
                  rows={3}
                  placeholder="Creat a new post and tag your collegue!"
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
             
                <Row style={{ marginTop: '10px' }} gutter={16}>
                  <Col>
                    <Tooltip title="Upload a photo">
                      <Button
                        type="primary"
                        shape="circle"
                        icon={
                          <FileImageOutlined style={{ color: '#9B9B9B' }} />
                        }
                      />
                    </Tooltip>
                    <Text
                      strong
                      style={{
                        margin: 0,
                        color: '#9B9B9B',
                        marginLeft: '10px',
                      }}
                    >
                      Image
                    </Text>
                  </Col>
                  <Col>
                    <Col>
                      <Tooltip title="Upload a Document">
                        <Button
                          type="primary"
                          shape="circle"
                          icon={
                            <FileImageOutlined style={{ color: '#9B9B9B' }} />
                          }
                        />
                      </Tooltip>
                      <Text
                        strong
                        style={{
                          margin: 0,
                          color: '#9B9B9B',
                          marginLeft: '10px',
                        }}
                      >
                        Document
                      </Text>
                    </Col>
                  </Col>
                  <Col
                    span={12}
                    style={{ display: 'flex', justifyContent: 'end' }}
                  >
                    <Button type="primary" style={{ background: '#E94E0F' }}>
                      Share
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* //////////////////////////////////////////////// */}
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
              // style={divStyle}}
            >
              <Col style={{ width: '100%' }}>
                <Row style={{ marginBottom: '10px' }}>
                  <Col>
                    <img
                      src={imageSrc}
                      alt="Player Image"
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        marginRight: '10px',
                      }}
                    />
                  </Col>
                  <Col>
                    <Title level={5} style={{ margin: '0px' }}>
                      Kavish Mojhoa
                    </Title>
                    <Title
                      type="secondary"
                      style={{ margin: '0px', fontSize: '11px' }}
                    >
                      20 Oct 2023
                    </Title>
                  </Col>
                </Row>
                <div
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '10px',
                    background: '#EAEAEA',
                  }}
                >
                  <Title level={2} style={{ margin: '0px', fontSize: '16px' }}>
                    Mon ressi zwen en bon dimoune 😂 @Ayush
                  </Title>
                  <Title level={2} style={{ margin: '0px', fontSize: '16px' }}>
                    #Funny
                  </Title>
                </div>

                <Row>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '10px',
                      gap: '10px',
                    }}
                  >
                    <Button
                      className="custom-button-hover"
                      type="primary"
                      shape="round"
                      size={'large'}
                      style={{ paddingTop: '5px' }}
                      textHoverBg={'red'}
                    >
                      <img
                        src="https://i.ibb.co/wJ7Qf2m/02.png"
                        alt="Logo"
                        width="25"
                      ></img>
                    </Button>

                    <Text strong style={{ margin: 0, color: '#9B9B9B' }}>
                      422 Sparks
                    </Text>
                  </div>
                </Row>
              </Col>
            </Row>
            {/* //////////////////////////////////////////////// */}
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
              // style={divStyle}}
            >
              <Col style={{ width: '100%' }}>
                <Row style={{ marginBottom: '10px' }}>
                  <Col>
                    <img
                      src={imageSrc}
                      alt="Player Image"
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        marginRight: '10px',
                      }}
                    />
                  </Col>
                  <Col>
                    <Title level={5} style={{ margin: '0px' }}>
                      Kavish Mojhoa
                    </Title>
                    <Title
                      type="secondary"
                      style={{ margin: '0px', fontSize: '11px' }}
                    >
                      20 Oct 2023
                    </Title>
                  </Col>
                </Row>
                <div
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '10px',
                    background: '#EAEAEA',
                  }}
                >
                  <Title level={2} style={{ margin: '0px', fontSize: '16px' }}>
                    Mon ressi zwen en bon dimoune 😂 @Ayush
                  </Title>
                  <Title level={2} style={{ margin: '0px', fontSize: '16px' }}>
                    #Funny
                  </Title>
                </div>

                <Row>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '10px',
                      gap: '10px',
                    }}
                  >
                    <Button
                      className="custom-button-hover"
                      type="primary"
                      shape="round"
                      size={'large'}
                      style={{ paddingTop: '5px' }}
                      textHoverBg={'red'}
                    >
                      <img
                        src="https://i.ibb.co/wJ7Qf2m/02.png"
                        alt="Logo"
                        width="25"
                      ></img>
                    </Button>

                    <Text strong style={{ margin: 0, color: '#9B9B9B' }}>
                      422 Sparks
                    </Text>
                  </div>
                </Row>
              </Col>
            </Row>
            {/* //////////////////////////////////////////////// */}
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
              // style={divStyle}}
            >
              <Col style={{ width: '100%' }}>
                <Row style={{ marginBottom: '10px' }}>
                  <Col>
                    <img
                      src={imageSrc}
                      alt="Player Image"
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        marginRight: '10px',
                      }}
                    />
                  </Col>
                  <Col>
                    <Title level={5} style={{ margin: '0px' }}>
                      Kavish Mojhoa
                    </Title>
                    <Title
                      type="secondary"
                      style={{ margin: '0px', fontSize: '11px' }}
                    >
                      20 Oct 2023
                    </Title>
                  </Col>
                </Row>
                <div
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '10px',
                    background: '#EAEAEA',
                  }}
                >
                  <Title level={2} style={{ margin: '0px', fontSize: '16px' }}>
                    Mon ressi zwen en bon dimoune 😂 @Ayush
                  </Title>
                  <Title level={2} style={{ margin: '0px', fontSize: '16px' }}>
                    #Funny
                  </Title>
                </div>

                <Row>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '10px',
                      gap: '10px',
                    }}
                  >
                    <Button
                      className="custom-button-hover"
                      type="primary"
                      shape="round"
                      size={'large'}
                      style={{ paddingTop: '5px' }}
                      textHoverBg={'red'}
                    >
                      <img
                        src="https://i.ibb.co/wJ7Qf2m/02.png"
                        alt="Logo"
                        width="25"
                      ></img>
                    </Button>

                    <Text strong style={{ margin: 0, color: '#9B9B9B' }}>
                      422 Sparks
                    </Text>
                  </div>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={10}>
          <div style={cardStyle}>dghfh</div>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
