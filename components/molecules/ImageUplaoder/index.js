import React from "react";

import Uploader from "./uploader";
import { Container } from "./index.styled";

const UploadContainer = ({ getImageFile }) => {

  const uploadProps = {
    name: "photo",
    multiple: false,
    beforeUpload: file => {
      getImageFile(file);
      return false;
    },
  };
  return (
    <Container>
      <Uploader uploadProps={uploadProps} />
    </Container>
  );
};

export default UploadContainer;
