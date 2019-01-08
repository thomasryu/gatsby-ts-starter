import * as React from 'react'
import { Link } from 'gatsby'

import { SampleLayout } from '../layouts/SampleLayout'
import { StatelessComponent } from '../components/StatelessComponent'
import { ClassComponent } from '../components/ClassComponent'

const IndexPage = () => (
  <SampleLayout>
    <StatelessComponent title="Index Page" />
    <ClassComponent />
    <Link to="/subdomain/">Go to /subdomain</Link>
  </SampleLayout>
)

export default IndexPage
