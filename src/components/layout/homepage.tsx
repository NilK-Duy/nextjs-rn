"use client";

import { CrownOutlined } from "@ant-design/icons";
import { Result } from "antd";

const HomePage = () => {
  return (
    <div style={{ padding: 20 }}>
      <Result icon={<CrownOutlined />} title="Fullstack Next/Nest - createdBy @ryan" />
    </div>
  );
};

export default HomePage;
