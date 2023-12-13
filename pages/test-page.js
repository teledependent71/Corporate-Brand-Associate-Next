import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import authorsResource from '../resources/authors'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Corporate Brand Associate</title>
          <meta
            property="og:title"
            content="test-page - Corporate Brand Associate"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_h63r7t) => (
            <>
              <h1 id={context_h63r7t?.Name}>Heading</h1>
            </>
          )}
          initialData={props.contextH63r7tProp}
          persistDataDuringLoading={true}
          key={props?.contextH63r7tProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextH63r7tProp = await authorsResource({
      ...context?.params,
    })
    return {
      props: {
        contextH63r7tProp: contextH63r7tProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
