import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Container } from "react-bootstrap";
import "@splidejs/react-splide/css";
const SplideComp = () => {
  return (
    <Container className="py-5">
      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          width: "100%",
          gap: "1rem",
          type: "loop",
          perPage: 3,
          focus: "center",
          autoplay: true,
          arrows: false,
          interval: 2000,
          pagination: false,
        }}>
        <SplideSlide>
          <img
            style={{ height: "100%", objectFit: "cover" }}
            className="w-100"
            src="https://images.unsplash.com/photo-1617303331806-3d6b58e03241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Image 1"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            style={{ height: "100%", objectFit: "cover" }}
            className="w-100"
            src="https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1529&q=80"
            alt="Image 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            style={{ height: "100%", objectFit: "cover" }}
            className="w-100"
            src="https://images.unsplash.com/photo-1536094627107-abf98dedaa8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1549&q=80"
            alt="Image 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            style={{ height: "100%", objectFit: "cover" }}
            className="w-100"
            src="https://images.unsplash.com/photo-1625662276901-4a7ec44fbeed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80"
            alt="Image 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            style={{ height: "100%", objectFit: "cover" }}
            className="w-100"
            src="https://plus.unsplash.com/premium_photo-1661515629309-71092bf30711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1095&q=80"
            alt="Image 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            style={{ height: "100%", objectFit: "cover" }}
            className="w-100"
            src="https://images.unsplash.com/photo-1585572214973-0fd84fd354fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
            alt="Image 2"
          />
        </SplideSlide>
      </Splide>
    </Container>
  );
};

export default SplideComp;
