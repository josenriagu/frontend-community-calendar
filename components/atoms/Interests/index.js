import React, { useState } from 'react';

export default function InterestSelect() {
  const [interest, setInterest] = useState('');

  return (
    <>
      <select
        value={interest}
        onChange={(e) => { setInterest(e.target.value); }}
        placeHolder="Select Interest"
        style={{
          fontSize: '15pt',
          border: 'none',
        }}
      >
        <option value="all">All Events</option>
        <option value="science-and-tech">Science and Technology</option>
        <option value="business">Business</option>
        <option value="music">Music</option>
        <option value="film-and-media">Film and Media</option>
        <option value="arts">Arts</option>
        <option value="fashion">Fashion</option>
        <option value="health">Health</option>
        <option value="sports-and-fitness">Sports and Fitness</option>
        <option value="travel-and-outdoor">Travel and Outdoor</option>
        <option value="food-and-drink">Food and Drink</option>
        <option value="charity-and-causes">Charity and Causes</option>
        <option value="government">Government</option>
        <option value="community">Community</option>
        <option value="spirituality">Spirituality</option>
        <option value="family-and-education">Family and Education</option>
        <option value="holiday">Holiday</option>
        <option value="home-and-lifestyle">Home and Lifestyle</option>
        <option value="auto-boat-and-air">Cars, Boats and Air</option>
        <option value="hobbies">Hobbies</option>
        <option value="school-activities">School Activities</option>
        <option value="other">Other</option>
      </select>
    </>
  );
}
