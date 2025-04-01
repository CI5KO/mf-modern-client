import { createRemoteComponent } from "@module-federation/bridge-react";
import { loadRemote } from "@module-federation/modern-js/runtime";

const ErrorBoundary = (info?: { error: { message: string } }) => {
  return (
    <div>
      <h2>This is ErrorBoundary Component, Something went wrong:</h2>
      <pre style={{ color: "red" }}>{info?.error.message}</pre>
    </div>
  );
};
const Loading = <div>loading...</div>;
const RemoteApp = createRemoteComponent({
  loader: () => loadRemote("remote/app"),
  fallback: ErrorBoundary,
  loading: Loading,
});

export default RemoteApp;
