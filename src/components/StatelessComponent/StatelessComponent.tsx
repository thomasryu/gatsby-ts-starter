import * as React from 'react'
import * as styles from './styles'

interface IProps {
  title: string
}

export const StatelessComponent = (props: IProps) => {
  return (
    <>
      <h1 className={styles.componentTitle}>{props.title}</h1>
    </>
  )
}
