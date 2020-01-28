import React from 'react';
import { Upload, Icon } from 'antd';

const { Dragger } = Upload;

let formData;

const Uploader = () => {
  const uploadProps = {
    name: 'photo',
    multiple: false,
    beforeUpload: file => {
      formData = new FormData();
      formData.append('image', file);
      return false;
    },
  };

  const handleSubmit = async () => {
    const url = 'http://localhost:5000/api/v1/event/create-event';

    if (typeof formData !== 'object') formData = new FormData();

    formData.append("name", "osgggama");
    formData.append("description", "Eze goes to school");
    formData.append("location", "jamaica street");
    formData.append("price", "5000");
    formData.append("eventType", "online");
    formData.append("source", "original");

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

    //   console.log(await response.json());
    } catch (e) {
    //   console.log(e);
    }

    //   return await response.json(); // parses JSON response into native JavaScript objects
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Dragger {...uploadProps}>
        <div style={{ width: '100%' }}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </div>
      </Dragger>
      <button type="button" onClick={handleSubmit}>upload</button>
    </div>
  );
};

export default Uploader;
