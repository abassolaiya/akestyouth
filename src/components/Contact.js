import styled from "styled-components";

const ContactContainer = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.primary};
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ContactInfo = styled.div`
  h3 {
    color: ${(props) => props.theme.secondary};
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input,
  textarea {
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: inherit;
  }

  button {
    background: ${(props) => props.theme.primary};
    color: white;
    border: none;
    padding: 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s;

    &:hover {
      background: ${(props) => props.theme.secondary};
    }
  }
`;

const Contact = () => (
  <ContactContainer>
    <SectionTitle>Contact Us</SectionTitle>
    <ContactGrid>
      <ContactInfo>
        <h3>Get In Touch</h3>
        <p>
          <strong>Address:</strong> New Covenant Church, Akobo Estate, Ibadan
        </p>
        <p>
          <strong>Phone:</strong> +234 812 345 6789
        </p>
        <p>
          <strong>Email:</strong> youth@nccakobo.org
        </p>
        <p>
          <strong>Service Times:</strong> Sundays at 8:00 AM & 10:00 AM
        </p>
      </ContactInfo>
      <div>
        <h3>Send Us a Message</h3>
        <ContactForm>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </ContactForm>
      </div>
    </ContactGrid>
  </ContactContainer>
);

export default Contact;
