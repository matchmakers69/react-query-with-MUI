import { ReactNode, Suspense } from "react";
import Loader from "../SuspenseLoader";

type LoadableProps = {
  children: ReactNode;
};

const Loadable = ({ children }: LoadableProps) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);

export default Loadable;
