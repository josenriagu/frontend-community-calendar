import React, { useState } from 'react';
import { message } from 'antd';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import fetch from 'isomorphic-fetch';
import jwtDecode from 'jwt-decode';
import Router from 'next/router';
import Cookie from 'js-cookie';


import * as Styles from './index.styled';
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
import PageLoader, { LoaderContainer } from '../../atoms/PageLoader';

const CreateEvent = () => {
  const initialState = {
    name: '',
    location: '',
    description: '',
    city: '',
    country: '',
    source: '',
    eventType: '',
    price: '',
    eventDate: null,
    image: null,
  };

  const selectorStyle = {
    borderRadius: '5px',
    fontSize: '16px',
    width: '40rem',
    height: '3.5rem',
  };

  const [newEvent, setNewEvent] = useState(initialState);
  const [pageLoading, setPageLoading] = useState(false);


  const setCity = (val) => setNewEvent({ ...newEvent, city: val });

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

  // eslint-disable-next-line consistent-return
  const fieldsValid = () => {
    const validator = {
      name: {
        type: 'string',
      },
      country: {
        type: 'string',
        test: /^[a-z]+$/i,
      },
      location: {
        type: 'string',
      },
      city: {
        type: 'string',
        test: /^[a-z]+$/i,
      },
      source: {
        type: 'string',
      },
      eventType: {
        type: 'string',
      },
      price: {
        type: 'string',
        test: /^[0-9]+$/,
      },
      image: {
        type: 'object',
      },
      date: {
        type: 'object',
      },
      description: {
        type: 'string',
      },
    };
    const eventKeys = Object.keys(newEvent);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < eventKeys.length; i++) {
      if (newEvent[eventKeys[i]] === '' || newEvent[eventKeys[i]] == null) {
        message.error(`${eventKeys[i].toUpperCase()} is required! `);
        return false;
      }
      switch (eventKeys[i]) {
        case 'city':
          if (typeof newEvent[eventKeys[i]] === 'string') {
            if (!newEvent[eventKeys[i]].match(validator.city.test)) {
              return false;
            }
          } else {
            return false;
          }
          break;
        case 'country':
          if (typeof newEvent[eventKeys[i]] === 'string') {
            if (!newEvent[eventKeys[i]].match(validator.country.test)) {
              return false;
            }
          } else {
            return false;
          }
          break;
        case 'source':
          if (typeof newEvent[eventKeys[i]] === 'string') {
            if (!newEvent[eventKeys[i]].match(validator.source.test)) {
              return false;
            }
          } else {
            return false;
          }
          break;
        case 'description':
          if (typeof newEvent[eventKeys[i]] === 'string') {
            if (!newEvent[eventKeys[i]].match(validator.description.test)) {
              return false;
            }
          } else {
            return false;
          }
          break;
        default: return true;
      }
    }
    return true;
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (!fieldsValid()) {
      return;
    }
    const url = 'https://comcalstaging.herokuapp.com/api/v1/event/fetch-events';

    const formData = new FormData();

    Object.keys(newEvent).forEach(key => formData.append(key, newEvent[key]));

    setPageLoading(true);

    try {
      const token = Cookie.get('comcal-event-token');
      if (!token) {
        message.error('You need to be authenticated to post an event.');
        setPageLoading(false);
        return;
      }
      const { id: author } = jwtDecode(token);
      if (!author) {
        message.error('Error: Could not verify your identity');
        setPageLoading(false);
        return;
      }

      setNewEvent({ ...newEvent, ...{ author } });

      const response = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
          authorization: token,
        },
      });

      if (response.status >= 400) {
        const errResponse = await response.json();
        message.error(`${errResponse.message}`);
        setPageLoading(false);
        return;
      }
      // remove page loader
      setPageLoading(false);

      // clear create event form.
      setNewEvent(initialState);
      message.success('Event Added');
      Router.push('/');
    } catch (e) {
      setPageLoading(false);
      message.error(e.message);
    }
  };

  return (
    <>
      <LoaderContainer>
        {pageLoading && <PageLoader />}
        <Styles.NavContainer>
          <NavBar
            style={{ dispaly: 'flex', justifyContent: 'space-between' }}
            createEvent
          />
        </Styles.NavContainer>
        <Styles.ContainerDiv>
          <Heading> Event Details</Heading>
          <br />
          <Styles.Form>
            <Styles.InputDiv>
              <Label medium>Event Title</Label>
              <Input
                xxLarge
                type="text"
                name="name"
                value={newEvent.name}
                onChange={handleChange}
                placeholder="Give a short distinct name"
              />
            </Styles.InputDiv>
            <Styles.InputDiv margin>
              <Label medium>Country</Label>
              <CountryDropdown
                value={newEvent.country}
                onChange={selectCountry}
                style={selectorStyle}
              />
            </Styles.InputDiv>
            <Styles.InputDiv margin>
              <Label medium>City</Label>
              <RegionDropdown
                country={newEvent.country}
                value={newEvent.city}
                style={selectorStyle}
                onChange={setCity}
              />
            </Styles.InputDiv>
            <Styles.InputDiv margin>
              <Label medium>Street</Label>
              <Input
                xxLarge
                noBackground
                type="text"
                name="location"
                value={newEvent.location}
                onChange={handleChange}
                placeholder="Street"
              />
            </Styles.InputDiv>
            <Styles.InputDiv margin>
              <Styles.InputDiv>
                <Label medium>Source</Label>
                <Input
                  xxLarge
                  noBackground
                  type="text"
                  name="source"
                  value={newEvent.source}
                  onChange={handleChange}
                  placeholder="source"
                />
              </Styles.InputDiv>
              <Styles.InputDiv margin>
                <Label medium>Interests</Label>
                <Styles.InputDiv border margin padding round>
                  <Interests
                    noBorder
                    interest={newEvent.eventType}
                    setInterest={setInterest}
                    small
                    type="text"
                    name="eventType"
                    value={newEvent.eventType}
                    onChange={handleChange}
                    placeholder="Event Type"
                  />
                </Styles.InputDiv>
              </Styles.InputDiv>
              <Styles.InputDiv margin>
                <Styles.Flex justify="space-between">
                  <Styles.InputDiv>
                    <Label medium>Price</Label>
                    <Input
                      medium
                      noBackground
                      type="text"
                      name="price"
                      value={newEvent.price}
                      onChange={handleChange}
                      placeholder="Fee"
                    />
                  </Styles.InputDiv>
                  <Styles.InputDiv>
                    <Label medium>Date</Label>
                    <DataPicker
                      eventDate={newEvent.eventDate}
                      onStartChange={onStartChange}
                    />
                  </Styles.InputDiv>
                </Styles.Flex>
              </Styles.InputDiv>
            </Styles.InputDiv>
            <ImageUploader getImageFile={getImageFile} />
            <Styles.Paragraph>
              We recommend using at least a 2160 x 1080px(2:1) ratio image thats
              no
              <br />
              larger than 5MB.
            </Styles.Paragraph>
            <Styles.InputDiv>
              <Label medium>Description</Label>
              <TextArea
                large
                noBackground
                type="text"
                name="description"
                value={newEvent.description}
                onChange={handleChange}
                placeholder="Description"
              />
            </Styles.InputDiv>
            <Styles.ButtonWrapper>
              <Button
                large
                style={{ background: colors.primary }}
                onClick={event => handleSubmit(event)}
              >
                Create Event
              </Button>
            </Styles.ButtonWrapper>
          </Styles.Form>
        </Styles.ContainerDiv>
      </LoaderContainer>
    </>
  );
};

export default CreateEvent;
