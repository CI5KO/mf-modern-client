import { Outlet } from "@modern-js/runtime/router";
import OfflinePage from "./offline";
import "./index.css";

export default function Layout() {
  return (
    <div>
      <Outlet />
      <OfflinePage />
    </div>
  );
}
