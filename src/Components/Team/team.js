import React, { Component } from "react"
import "./team.css";
import Border from "../Customized Border/border";
import { TeamCard } from "../Team Card/teamCard";
import { Teammembers } from "../Team Card/teammember";
import codersEvoke from "../assets/img/logo.png";

export default function Team() {
  return (
    <section className="my-5 container">
      <div>
        <h2 className="text-center fs-1">Meet Our Team</h2>
      </div>
      <Border />

      <div
        id="carouselExampleControlsNoTouching"
        class="carousel slide"
        data-bs-touch="false"
        data-bs-interval="false"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="d-flex justify-content-center">
              <Teammembers />
              {/* <TeamCard />
              <TeamCard /> */}
            </div>
          </div>
          <div class="carousel-item">
            <div className="d-flex justify-content-center">
              <Teammembers />
              {/* <TeamCard />
              <TeamCard />
              <TeamCard /> */}
            </div>
          </div>
          <div class="carousel-item">
            <div className="d-flex justify-content-center">
              <Teammembers />
              {/* <TeamCard /> */}
              {/* <TeamCard />
              <TeamCard /> */}
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
