import React from 'react';
import PropTypes from 'prop-types';

import Uploader from './uploader';
import { Container } from './index.styled';


const UploadContainer = ({ getImageFile }) => {
  const uploadProps = {
    name: 'photo',
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

UploadContainer.propTypes = {
  getImageFile: PropTypes.func.isRequired,
};


export default UploadContainer;
