import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderContainer = styled.section`
  padding: 4rem 0;
  background-color: ${(props) => props.theme.light};
`;

const SliderTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: ${(props) => props.theme.dark};
`;

const Slide = styled.div`
  padding: 0 1rem;
  outline: none;
`;

const SlideContent = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SlideImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${(props) => `url(${props.image}) center/cover`};
`;

const SlideText = styled.div`
  padding: 1.5rem;
`;

const SlideTitle = styled.h3`
  color: ${(props) => props.theme.primary};
  margin-bottom: 0.5rem;
`;

const EventDate = styled.p`
  color: ${(props) => props.theme.secondary};
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Slide every 5 seconds
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Sample images (replace with your actual images)
  const sampleImages = [
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1542403766-b5d53747686b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  ];

  const slides = [
    {
      id: 1,
      image: sampleImages[0],
      title: "Youth Camp 2025",
      date: "May 15-18, 2025",
      text: "Join us for an unforgettable weekend of worship and fellowship at our annual youth camp",
    },
    {
      id: 2,
      image: sampleImages[1],
      title: "Bible Study",
      date: "Every Wednesday | 5:30 PM",
      text: "Deep dive into God's word with our weekly bible study sessions",
    },
    {
      id: 3,
      image: sampleImages[2],
      title: "Community Outreach",
      date: "June 20, 2025",
      text: "Giving back to our community through service projects and evangelism",
    },
    {
      id: 4,
      image: sampleImages[3],
      title: "Worship Night",
      date: "Monthly | 7:00 PM",
      text: "Powerful nights of worship, prayer and spiritual renewal",
    },
    {
      id: 5,
      image: sampleImages[1],
      title: "Youth Conference",
      date: "August 10-12, 2025",
      text: "Annual youth conference with guest speakers and special programs",
    },
  ];

  return (
    <SliderContainer>
      <SliderTitle>Upcoming Events</SliderTitle>
      <Slider {...settings}>
        {slides.map((slide) => (
          <Slide key={slide.id}>
            <SlideContent>
              <SlideImage image={slide.image} />
              <SlideText>
                <SlideTitle>{slide.title}</SlideTitle>
                <EventDate>{slide.date}</EventDate>
                <p>{slide.text}</p>
              </SlideText>
            </SlideContent>
          </Slide>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default Gallery;
