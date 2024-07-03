import React from "react";
import "./Hero.css";
import p_img from "../../assets/photo.jpg";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <img src={p_img} alt="" />
      <h1>
        {" "}
        <span>Sputhnika Shivani </span> || Founder of ABC.ai
      </h1>
      <p>
        <span>About Me:</span>
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque sed
        natus quos officiis excepturi odit cupiditate? Laudantium eius tenetur
        nulla, accusantium similique quam tempora eveniet minima incidunt unde
        iste error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
        a suscipit obcaecati praesentium totam. Neque quasi nobis sequi,
        explicabo repudiandae odio laboriosam impedit, aut rerum ex deserunt
        dolorem minus quos.
      </p>
      <div
        className="hero-chat"
        onClick={() => {
          navigate(`/Sputhnika-Shivani`);
        }}
      >
        Chat-with-me
      </div>
    </div>
  );
};

export default Hero;
