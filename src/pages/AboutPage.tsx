import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar, Button } from '@material-ui/core';
import abay from '../assets/abay.png';

const AboutPage: React.FC = () => {
  const history = useHistory();
  const about = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (about.current) {
        about.current.classList.add("about-active");
        console.log(about.current)
      }
    }, 500)
  }, [])

  return (
    <div ref={about} className="about-page">
      <div className="author-container">
        <Avatar alt="Author Abay" src={abay} style={{ width: 50, height: 50 }} />
        <div className="ml">Автор сайта Кинаят Абай</div>
      </div>
      <p style={{ maxWidth: 400 }}>
        Сайт разработан на React + Typescript. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptatem sapiente ut, nobis, sit vitae amet fugit placeat tenetur quod possimus, fuga totam eaque id. Dignissimos sed dolore error eaque.
      </p>
      <Button
        variant="outlined"
        color="inherit"
        onClick={() => history.push('/')}
      >
        Вернуться к задачам
      </Button>
    </div>
  )
}

export default AboutPage;