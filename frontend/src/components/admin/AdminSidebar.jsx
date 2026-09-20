function AdminSidebar() {
  return (
    <aside>
      <h2>DressCart Admin</h2>

      <nav>
        <a href="/admin">Dashboard</a>
        <a href="/admin/products">Products</a>
        <a href="/admin/orders">Orders</a>
        <a href="/admin/customers">Customers</a>
      </nav>
    </aside>
  );
}

export default AdminSidebar;