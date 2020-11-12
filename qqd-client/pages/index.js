import Head from 'next/head'
import Link from 'next/link'
import React, {useState} from 'react'
import Header from '../components/Header'
import {Row, Col, List} from 'antd'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import {
  CalendarOutlined,
  YoutubeFilled,
  NumberOutlined
} from '@ant-design/icons';
Home.getInitialProps = async ()=>{
  const promise = new Promise((resolve)=>{
    axios(servicePath.getArticleList).then((res)=>{
      console.log('----->>>',res.data)
      resolve(res.data)
    })
  })
  return await promise
}
export default function Home(list) {
  const [ mylist , setMylist ] = useState(
    list.data
  ) 
  return (
    <div>
      <Head>
        <title>
          2232
        </title>
      </Head>
      <Header>
      </Header>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
          header={<div>最新日志</div>}
          itemLayout="vertical"
          dataSource={mylist}
          renderItem={item => (
            <List.Item>
              <div className="list-title">
                <Link href={{pathname:'/detail', query:{id:item.id}}}>
                <a>{item.title}</a>
                </Link>
                </div>
              <div className="list-icon">
              <span><CalendarOutlined />{item.add_time}</span>
              <span><YoutubeFilled />{item.type_name}</span>
              <span><NumberOutlined  />{item.view_count}人</span>
              </div>
              <div className="list-context">{item.introduce}</div>  
            </List.Item>
          )}
        />  
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />  
          <Advert />
        </Col>
      </Row>
      <Footer />
    </div>
  )
}
