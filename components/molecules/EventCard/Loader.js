import React from 'react';
import { Spin, Icon as AntIcon } from 'antd';
import { colors } from '../../~reusables';

export default function Loader() {
  const antIcon = <AntIcon type="loading" style={{ fontSize: 33, color: colors.primary }} spin />;

  return (
    <div style={{
      textAlign: 'center',
      background: 'rgba(0, 0, 0, 0.05)',
      borderRadius: '4px',
      marginBottom: '20px',
      padding: '30px 50px',
      margin: '20px 0',
    }}
    >
      <Spin indicator={antIcon} style={{ alignSelf: 'center' }} />
    </div>
  );
}