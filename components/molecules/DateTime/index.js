/* eslint-disable react/prop-types */
import React from 'react';
import { DatePicker } from 'antd';

import * as Styles from './index.styled';

const DateTimePicker = ({ eventDate, onStartChange }) => (
  <Styles.DateTimeDiv>
    <DatePicker
      showTime
      format="YYYY-MM-DD HH:mm:ss"
      value={eventDate}
      placeholder="Event Date"
      onChange={onStartChange}
    />
  </Styles.DateTimeDiv>
);

export default DateTimePicker;
