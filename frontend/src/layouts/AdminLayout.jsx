import { Outlet } from "react-router-dom";

import AdminSidebar from "../components/admin/AdminSidebar";
import AdminTopbar from "../components/admin/AdminTopbar";

function AdminLayout() {
  return (
    <div>
      <AdminSidebar />

      <div>
        <AdminTopbar />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;