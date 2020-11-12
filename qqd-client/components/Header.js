import React,{useState, useEffect} from 'react'
import {Row, Col, Menu} from 'antd'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import  * as Icon from '@ant-design/icons';
const Header=()=>{
  const [navArray, setNavArray] = useState([])
  useEffect(()=>{
    const fetchData = async ()=>{
      const result = await axios(servicePath.getTypeInfo).then((res)=>{
        setNavArray(res.data.data)
        return res.data.data
      })
      setNavArray(result)
    }
    fetchData()
  },[])

  const handleClick = (e)=>{
    console.log(e,'=====')
    if(e == 'item_0'){
      Router.push('/index')
    }else{
      Router.push('/list?id='+e)
    }
  }

  return (
  <div className="header">
    <Row type="flex" justify="center">
    <Col  xs={24} sm={24} md={10} lg={13} xl={11}>
        <span className="header-logo">趣前端</span>
        <span className="header-txt">全球程序员最佳学习路线</span>
      </Col>
      <Col className="memu-div" xs={0} sm={0} md={14} lg={10} xl={7}>
        <Menu mode="horizontal" onClick={handleClick}>
            {
              navArray.map((item)=>{
                return (
                  <Menu.Item key={item.Id}>
                    {
                      React.createElement(
                        Icon[item.icon],
                        {
                          style:{ fontSize: '16px', color: '#08c' }
                        }
                      )
                    }
                    {item.type_name}
                  </Menu.Item>
                )
              })
            }
        </Menu>
      </Col>
    </Row>
  </div>
  )
}
export default Header