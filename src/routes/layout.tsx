import { Outlet } from "@modern-js/runtime/router";
import OfflinePage from "./offline";

export default function Layout() {
  return (
    <div>
      <Outlet />
      <OfflinePage />
    </div>
  );
}
