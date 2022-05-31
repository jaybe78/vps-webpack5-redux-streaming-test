import React, { lazy, ComponentType } from "react";

type LazyProps = {
  name: string;
};

const retry = (
  fn: () => Promise<{ default: ComponentType }>,
  retriesLeft = 5,
  interval = 1000
): Promise<{ default: ComponentType }> => {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            console.log(error);
            reject(error);
            return;
          }
          retry(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
};

const LazyComponentDelay = (props: LazyProps) =>
  lazy(() =>
    Promise.all([
      retry(() => import(`../components/${props.name}.tsx`)),
      new Promise((resolve) => setTimeout(resolve, 1000)),
    ]).then(([module]) => module)
  );

const LazyView = (props: LazyProps) => {
  const View = LazyComponentDelay(props);
  return <View />;
};

export default LazyView;
