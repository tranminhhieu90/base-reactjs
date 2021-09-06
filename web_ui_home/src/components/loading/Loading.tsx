import React from 'react'
import { Spin } from 'antd'
import {AiOutlineLoading} from 'react-icons/ai'

interface IProps {
  label?: string
}

const Loading = ({label = 'Loading...' }: IProps) => {
  return (
    <div className="loading-container">
      <Spin tip={label} indicator={<AiOutlineLoading style={{fontSize: 28}}/>}/>
    </div>
  )
}

export default Loading;