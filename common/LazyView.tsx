import React, { lazy, ComponentType } from "react";

type LazyProps = {
  page: string;
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

const LazyPage = (props: LazyProps) =>
  lazy(() =>
    Promise.all([
      retry(() => import(`../pages/${props.page}.tsx`)),
      new Promise((resolve) => setTimeout(resolve, 1000)),
    ]).then(([module]) => module)
  );

export const LazyDelay = (props: LazyProps) =>
  lazy(() =>
    Promise.all([
      retry(() => import(`../pages/${props.page}.tsx`)),
      new Promise((resolve) => setTimeout(resolve, 1000)),
    ]).then(([module]) => module)
  );

export default LazyPage;
