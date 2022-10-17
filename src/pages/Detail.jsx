import React from 'react'
import Layout from '../components/Layout';
import { Link } from 'react-router-dom'

const Detail = () => {
  return (
    <Layout>
      <Link to = "/list"> 목록으로 </Link>
    </Layout>
  )
}

export default Detail