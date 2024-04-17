// Homepage.js

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../styles.css';

const Homepage = () => {
  return (
    <div className="container">
            <div className="profile-container">
            <h1 className="profile-heading">Profiles</h1>
      <p className="profile-description">Click on a profile to explore more</p>
        <div className="flex-container">
          <div className="row">
            <div className="profile-card">
              <img
                alt="Profile"
                src="1.jpeg"
                style={{ width: "220px", height: "220px", borderRadius: "50%" }}
              />
              <h2 className="font-bold">Alice</h2>
              <p className="text-center w-300 dark:prose-dark">
                Frontend Developer. I love creating beautiful web experiences.
              </p>
              <Link to="/profile">
                <Button className="explore-button" variant="contained" color="primary">
                  Explore Profile
                </Button>
              </Link>
            </div>
            <div className="profile-card">
              <img
                alt="Profile"
                src="2.jpg"
                style={{ width: "220px", height: "220px", borderRadius: "50%" }}
              />
              <h2 className="font-bold">Bob</h2>
              <p className="text-center w-300 dark:prose-dark">
                Backend Developer. Passionate about building scalable systems.
              </p>
              <Link to="/profile">
                <Button className="explore-button" variant="contained" color="primary">
                  Explore Profile
                </Button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="profile-card">
              <img
                alt="Profile"
                src="3.jpg"
                style={{ width: "220px", height: "220px", borderRadius: "50%" }}
              />
              <h2 className="font-bold">Charlie</h2>
              <p className="text-center w-300 dark:prose-dark">
                Data Scientist. Analyzing data to uncover insights and drive decisions.
              </p>
              <Link to="/profile">
                <Button className="explore-button" variant="contained" color="primary">
                  Explore Profile
                </Button>
              </Link>
            </div>
            <div className="profile-card">
              <img
                alt="Profile"
                src="4.png"
                style={{ width: "220px", height: "220px", borderRadius: "50%" }}
              />
              <h2 className="font-bold">Diana</h2>
              <p className="text-center w-300 dark:prose-dark">
                UX Designer. Crafting delightful user experiences through design.
              </p>
              <Link to="/profile">
                <Button className="explore-button" variant="contained" color="primary">
                  Explore Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
