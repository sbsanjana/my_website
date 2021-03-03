import React from "react";
import { Button } from 'antd';
import "antd/dist/antd.css";

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <Button type="primary">Primary</Button>
    </div>
  )
}