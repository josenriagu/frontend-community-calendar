import React, { useState } from "react";
import { Upload, Icon } from "antd";

const { Dragger } = Upload;

const Uploader = ({ uploadProps }) => {

console.log('uploadProps = ', JSON.stringify(uploadProps))

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Dragger {...uploadProps}>
        <div style={{ width: "100%" }}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </div>
      </Dragger>
    </div>
  );
};

export default Uploader;
