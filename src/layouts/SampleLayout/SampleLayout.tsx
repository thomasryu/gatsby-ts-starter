import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { StyleHelper } from '../../styles'

StyleHelper.reset()

interface IData {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

interface IProps {
  children?: Array<React.ReactChild> | React.ReactChild
}

export const SampleLayout = (props: IProps) => {
  return (
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={(data: IData) => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: 'something, something else, and another' }
            ]}
          />

          <main>
            <header>header</header>
            {props.children}
            <footer>footer</footer>
          </main>
        </>
      )}
    />
  )
}
