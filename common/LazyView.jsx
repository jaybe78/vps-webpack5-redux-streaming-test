import React, { lazy, ComponentType } from 'react'



const retry = (
  fn,
  retriesLeft = 5,
  interval = 1000
) => {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            console.log(error)
            reject(error)
            return
          }
          retry(fn, retriesLeft - 1, interval).then(resolve, reject)
        }, interval)
      })
  })
}

const LazyComponentDelay = (props) =>
  lazy(() =>
    Promise.all([
      retry(() => import(`../components/${props.name}.jsx`)),
      new Promise((resolve) => setTimeout(resolve, 1000)),
    ]).then(([module]) => module)
  )

const LazyView = (props) => {
  const View = LazyComponentDelay(props)
  return <View {...props} />
}

export default LazyView
