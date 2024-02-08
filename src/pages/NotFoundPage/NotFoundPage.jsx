import React from 'react';
import pageNotFound from '../../assets/Images/NotFound.png';
import './NotFoundPage.scss';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const buttonClickHandler = (event) => {
    navigate('/');
  };
  return (
    <div className="not-found">
      <div>
        <img
          src={pageNotFound}
          alt="Page Not Found"
          className="not-found__image"
        />
      </div>
      <button className="not-found__button" onClick={buttonClickHandler}>
        Go Back To Home
      </button>
    </div>
  );
};

export default NotFoundPage;
