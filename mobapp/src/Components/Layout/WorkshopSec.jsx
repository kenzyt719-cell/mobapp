import "./WorkshopSec.css";
import { useEffect, useState } from "react";

import { supabase } from "../../supabaseClient";

import workshopImg from "../../Assets/picpicpic.png";
import calendarIcon from "../../Assets/calendar.png";
import clockIcon from "../../Assets/clock.png";
import locationIcon from "../../Assets/location.png";

export default function WorkshopSec() {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    fetchWorkshops();
  }, []);

  async function fetchWorkshops() {
    const { data, error } = await supabase
      .from("Community")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setWorkshops(data);
    }
  }

  return (
    <div className="workshop-wrapper">
      {workshops.map((item) => (
        <div className="workshop-card" key={item.id}>
          <img
            src={workshopImg}
            alt="workshop"
            className="workshop-img"
          />

          <h3 className="title">{item.title}</h3>

          <div className="info">
            <div className="row">
              <img src={calendarIcon} className="icon" alt="" />
              <p>{item.calender}</p>
            </div>

            <div className="row">
              <img src={clockIcon} className="icon" alt="" />
              <p>{item.clock}</p>
            </div>

            <div className="row">
              <img src={locationIcon} className="icon" alt="" />
              <p>{item.location}</p>
            </div>
          </div>

          <div className="bottom">
            <div className="left">
              <span className="badge">Grades 7-9</span>
              <span className="spots">12 spots left</span>
            </div>

            <button className="join-btn">Join</button>
          </div>
        </div>
      ))}
    </div>
  );
}