import React, { useState } from 'react';
import { message } from 'antd';
import styled from 'styled-components';
import { CountryDropdown } from 'react-country-region-selector';

import { Button } from '../../atoms/Button';
import Interests from '../../atoms/Interests';
import { colors } from '../../~reusables';
import Heading from '../../atoms/Heading';
import Label from '../../atoms/Label';
import Input from '../../atoms/Input';
import NavBar from '../../molecules/Navbar';
import ImageUploader from '../../molecules/ImageUplaoder';
import TextArea from '../../atoms/TextArea';
import DataPicker from '../../molecules/DateTime';

const CreateEvent = () => {
  const initialState = {
    name: '',
    location: '',
    description: '',
    file: '',
    city: '',
    country: '',
    source: '',
    eventType: '',
    price: '',
    eventDate: null,
  };

  const initialErrors = {
    eventError: '',
    locationError: '',
  };

  const [newEvent, setNewEvent] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);

  const handleChange = event => {
    const { name, value } = event.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const onChangeDate = (field, value) => setNewEvent({ ...newEvent, [field]: value });
  const selectCountry = (val) => setNewEvent({ ...newEvent, country: val });
  const setInterest = (value) => setNewEvent({ ...newEvent, eventType: value });
  const onStartChange = value => {
    onChangeDate('eventDate', value);
  };

  const getImageFile = file => setNewEvent({ ...newEvent, ...{ image: file } });

  const handleErrors = () => {
    let eventError = '';
    let locationError = '';

    if (!newEvent.name) {
      eventError = 'event name is required';
    }

    if (!newEvent.location) {
      locationError = 'Location is required';
    }

    if (eventError || locationError) {
      setErrors({ eventError, locationError });
      return false;
    }
    return true;
  };

  const handleSubmit = async event => {
    event.preventDefault();
    // const isValid = handleErrors();
    // if (isValid) {
    //   setErrors(initialErrors);
    // }
    // else {
    //   message.error('Error occured');
    // }
    const url = 'http://localhost:5000/api/v1/event/create-event';

    const formData = new FormData();

    Object.keys(newEvent).forEach(key => formData.append(key, newEvent[key]));

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      console.log('see', await response.json());
      message.success('Event Added');
      console.log('newEvent is', newEvent);
    } catch (e) {
      message.error(e.message);
    }
  };

  return (
    <>
      <NavBar
        style={{ dispaly: 'flex', justifyContent: 'space-between' }}
        createEvent
      />
      <ContainerDiv>
        <Heading> Event Details</Heading>
        <br />
        <Form>
          <InputDiv>
            <Label medium>Event Title</Label>
            <Input
              xxLarge
              type="text"
              name="name"
              value={newEvent.name}
              onChange={handleChange}
              placeholder="Give a short distinct name"
            />
            <div style={{ color: 'red' }}>{errors.eventError}</div>
          </InputDiv>
          <InputDiv>
            <Label medium>Location</Label>
            <CountryDropdown
              value={newEvent.country}
              onChange={(val) => selectCountry(val)}
              style={{
                borderRadius: '5px',
                fontSize: '16px',
                width: '40rem',
                height: '3.5rem',
              }}
            />
          </InputDiv>
          <InputDiv>
            <Input
              xxLarge
              style={{ background: 'none' }}
              type="text"
              name="location"
              value={newEvent.location}
              onChange={handleChange}
              placeholder="Location"
            />
            <div style={{ color: 'red' }}>{errors.locationError}</div>
          </InputDiv>
          <InputDiv>
            <Input
              xxLarge
              style={{ background: 'none' }}
              type="text"
              name="city"
              value={newEvent.city}
              onChange={handleChange}
              placeholder="City"
            />
          </InputDiv>
          <InputDiv>
            <Input
              xxLarge
              style={{ background: 'none' }}
              type="text"
              name="source"
              value={newEvent.source}
              onChange={handleChange}
              placeholder="source"
            />
            <InputDiv>
              <Interests
                interest={newEvent.interest}
                setInterest={setInterest}
                xxLarge
                style={{ border: '1px solid', marginTop:'10px' }}
                type="text"
                name="eventType"
                value={newEvent.eventType}
                onChange={handleChange}
                placeholder="Event Type"
              />
            </InputDiv>
            <InputDiv>
              <StyledDiv>
                <Input
                  medium
                  style={{ background: 'none', marginRight: '4rem' }}
                  type="text"
                  name="price"
                  value={newEvent.price}
                  onChange={handleChange}
                  placeholder="Fee"
                />

                <DataPicker style={{ width: '19rem' }} eventDate={newEvent.eventDate} onStartChange={onStartChange} />
              </StyledDiv>
            </InputDiv>
          </InputDiv>
          <span style={{ marginRight: '318px' }}>Event Image</span>
          <ImageUploader getImageFile={getImageFile} />
          <Paragraph>
            We recommend using at least a 2160 x 1080px(2:1) ratio image thats
            no
            <br />
             larger than 5MB.
            <a href="#">Learn more</a>
          </Paragraph>
          <InputDiv>
            <TextArea
              large
              style={{ background: 'none' }}
              type="text"
              name="description"
              value={newEvent.description}
              onChange={handleChange}
              placeholder="Description"
            />
          </InputDiv>
          <ButtonWrapper>
            <Button
              large
              style={{ background: colors.primary }}
              onClick={event => handleSubmit(event)}
            >
              Create Event
            </Button>
          </ButtonWrapper>
        </Form>
      </ContainerDiv>
    </>
  );
};

export default CreateEvent;

const Form = styled.div`
width:800px;
display:flex;
 flex-direction:column;
 align-items:center
`;
const ContainerDiv = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center
`;
const ButtonWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 14px;
  margin-left:40px;
  margin-bottom:10px
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom:10px
`;

export const StyledDiv = styled.div`
  display: flex;
  margin-bottom: 5px;
`;
