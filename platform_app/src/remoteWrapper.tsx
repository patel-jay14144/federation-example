import React, { Suspense, lazy } from "react";
const EvalApp = React.lazy(() => import("eval/EvalApp"));

interface RemoteWrapperProps {
  remote: string;
  module: string;
}

const loadRemoteComponent = (remote: string, module: string) => {
  //   return lazy(() => {
  //     console.log(window);
  //     console.log(remote);

  //     return window[remote].get(module).then((factory: any) => ({
  //       default: factory(),
  //     }));
  //   });
  return EvalApp;
};

export default function RemoteWrapper({ remote, module }: RemoteWrapperProps) {
  const Component = loadRemoteComponent(remote, module);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
}
