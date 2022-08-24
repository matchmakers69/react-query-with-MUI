import SuspenseLoader from "components/ui/SuspenseLoader";
import { ComponentType, Suspense } from "react";

function withLoader<T>(WrappedComponent: ComponentType<T>) {
  return (props: T) => {
    return (
      <Suspense fallback={<SuspenseLoader />}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };
}

export default withLoader;
