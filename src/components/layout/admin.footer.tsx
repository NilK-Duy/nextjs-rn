"use client";
import { Layout } from "antd";

const AdminFooter = () => {
  const { Footer } = Layout;
  return (
    <>
      <Footer style={{ textAlign: "center" }}>Ryan ©{new Date().getFullYear()} Created by @ryan</Footer>
    </>
  );
};

export default AdminFooter;
