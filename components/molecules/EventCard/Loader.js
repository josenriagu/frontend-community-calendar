import React from 'react';
import { Spin, Icon as AntIcon } from 'antd';
import { colors } from '../../~reusables';
import { LoaderDiv } from './index.styled';

export default function Loader() {
  const antIcon = <AntIcon type="loading" style={{ fontSize: 33, color: colors.primary }} spin />;

  return (
    <LoaderDiv>
      <Spin indicator={antIcon} style={{ alignSelf: 'center' }} />
    </LoaderDiv>
  );
}
