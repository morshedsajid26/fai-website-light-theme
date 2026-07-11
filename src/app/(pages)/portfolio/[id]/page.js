import ProjectDetails from '@/app/component/portfolio.jsx/ProjectDescription'
import React from 'react'

const page = ({ params }) => {
  return (
    <div>
        <ProjectDetails params={params} />
    </div>
  )
}

export default page