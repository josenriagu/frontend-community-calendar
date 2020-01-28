import React, { useState } from 'react';
import { message } from 'antd';
import styled from 'styled-components';
import { CountryDropdown } from 'react-country-region-selector';

import { Button } from '../../atoms/Button';
import { colors } from '../../~reusables';
import Heading from '../../atoms/Heading';
import Label from '../../atoms/Label';
import Input from '../../atoms/Input';
import NavBar from '../../molecules/Navbar';
import ImageUploader from '../../molecules/ImageUplaoder';
import TextArea from '../../atoms/TextArea';

const CreateEvent = () => {
  const initialState = {
    name: '',
    location: '',
    description: '',
    image: '',
    city: '',
    country: '',
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
    console.log(newEvent);
    // const isValid = handleErrors();
    // if (isValid) {
    //   setErrors(initialErrors);
    // } else {
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

      console.log(await response.json());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <NavBar
        style={{ dispaly: 'flex', justifyContent: 'space-between' }}
        createEvent
      />
      <Div>
        <Heading> Event Details</Heading>
        <br />
        <form>
          <Label medium>Event Title</Label>
          <br />
          <InputDiv>
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
          <br />
          <Label medium>Location</Label>
          <br />
          <Input
            xLarge
            style={{ background: 'none', marginBottom: '5px' }}
            type="text"
            name="location"
            value={newEvent.location}
            onChange={handleChange}
            placeholder="Location"
          />
          <div style={{ color: 'red' }}>{errors.locationError}</div>
          <InputDiv>
            <Input
              xLarge
              style={{ background: 'none', marginBottom: '5px' }}
              type="text"
              name="city"
              value={newEvent.city}
              onChange={handleChange}
              placeholder="City"
            />
            <Input
              xLarge
              style={{ background: 'none', marginBottom: '5px' }}
              type="text"
              name="address"
              value={newEvent.address}
              onChange={handleChange}
              placeholder="Address 2"
            />
            <Input
              xLarge
              style={{ background: 'none', marginBottom: '5px' }}
              type="text"
              name="address"
              value={newEvent.address}
              onChange={handleChange}
              placeholder="city"
            />
            <StyledDiv>
              <Input
                medium
                style={{ background: 'none', marginRight: '2rem' }}
                type="text"
                name="address"
                value={newEvent.address}
                onChange={handleChange}
                placeholder="state"
              />
              <Input
                medium
                style={{ background: 'none' }}
                type="text"
                name="address"
                value={newEvent.address}
                onChange={handleChange}
                placeholder="zip/postal"
              />
            </StyledDiv>
            <CountryDropdown
              style={{
                borderRadius: '20px',
                fontSize: '16px',
                maxWidth: '25rem',
                height: '3.5rem',
              }}
            />
          </InputDiv>
          <br />
          <span>
            <a href="#">online event</a>
          </span>
          &nbsp; &nbsp;
          <span>
            <a href="#">Enter address</a>
          </span>
          <br />
          <span>Starts</span>
          <br />
          <span>Event Image</span>
          <ImageUploader getImageFile={getImageFile} />
          <Paragraph>
            We recommend using at least a 2160 x 1080px(2:1) ratio image thats
            no larger than 5MB.
            <a href="#">Learn more</a>
          </Paragraph>
          <InputDiv>
            <TextArea
              medium
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
        </form>
      </Div>
    </>
  );
};

export default CreateEvent;

const Div = styled.div`
  width: 900px;
  margin: 0 auto;
  margin-top: 5px;
`;
const ButtonWrapper = styled.div`
  margin-top: 20px;
  align-items: center;
`;

const Paragraph = styled.p`
  font-size: 14px;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledDiv = styled.div`
  display: flex;
  margin-bottom: 5px;
`;
