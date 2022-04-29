import React from 'react'
import {Layout} from 'antd'
const { Content } = Layout;

function Tasks():JSX.Element {
  return (
      <Content>
      <div>index</div>

      <style jsx>{`
            .content {
              text-align: center;
              margin: auto;
              padding-top: 20px;
            }
            .box {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            .resumeBlock {
              display: flex;
              justify-content: space-between;
              width: 500px;
              height: 34px;
              background-color: #fff;
              border-radius: 20px;
            }
            h1 {
              font-size: 2em;
              font-weight: 500;
            }
            .ant-select{
              border-bottom: none;
            }
            .elemInBox{
              padding: 0 20px;
              align-items: center;
            }
          `}</style>
      </Content>
  )
}

export default Tasks