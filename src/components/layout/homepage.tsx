"use client";

import { CrownOutlined, HomeOutlined } from "@ant-design/icons";
import { Result } from "antd";
import Link from "next/link";

const HomePage = () => {
  return (
    <div style={{ padding: 20 }}>
      <Result icon={<CrownOutlined />} title="Fullstack Next/Nest - createdBy @ryan" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link
          href={"/dashboard"}
          style={{
            display: "inline-block",
            textAlign: "center",
            padding: "15px 30px",
            backgroundColor: "#0070f3",
            color: "#ffffff",
            borderRadius: "5px",
            fontSize: "18px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#005bb5")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0070f3")}
        >
          <HomeOutlined style={{ marginRight: "8px" }} />
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
