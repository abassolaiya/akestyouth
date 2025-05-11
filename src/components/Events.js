import styled from "styled-components";

const EventsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${(props) => props.theme.light};
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.primary};
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const EventList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const EventCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const EventImage = styled.div`
  height: 200px;
  background: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const EventContent = styled.div`
  padding: 1.5rem;
`;

const EventTitle = styled.h3`
  color: ${(props) => props.theme.primary};
  margin-bottom: 0.5rem;
`;

const EventDate = styled.p`
  color: ${(props) => props.theme.dark};
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Events = () => (
  <EventsContainer>
    <SectionTitle>Upcoming Events</SectionTitle>
    <EventList>
      <EventCard>
        <EventImage>Bible Study</EventImage>
        <EventContent>
          <EventTitle>Weekly Bible Study</EventTitle>
          <EventDate>Every Tuesday | 5:30 PM</EventDate>
          <p>Join us for an in-depth study of God's Word</p>
        </EventContent>
      </EventCard>
      <EventCard>
        <EventImage>Youth Connect</EventImage>
        <EventContent>
          <EventTitle>Weekly online Study</EventTitle>
          <EventDate>Saturdays 9:00 PM</EventDate>
          <p>An evening of powerful study and prayer</p>
        </EventContent>
      </EventCard>
      <EventCard>
        <EventImage>Community Service</EventImage>
        <EventContent>
          <EventTitle>Community Outreach</EventTitle>
          <EventDate>June 20 | 9:00 AM</EventDate>
          <p>Serving our local community together</p>
        </EventContent>
      </EventCard>
    </EventList>
  </EventsContainer>
);

export default Events;
