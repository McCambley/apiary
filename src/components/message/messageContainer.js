/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Inner, Container, Item, Bubble, Title, Reply, Image } from './styledMessages';
import messages from '../../arrays/what-is-practicum';

export default function MessageContainer() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Container>
      <Title>What is Practicum by Yandex?</Title>
      {messages.map((item) => (
        <Item key={item.id} data-aos={item.fade} data-aos-duration="750">
          <Inner direction={item.direction}>
            <Image displayLogo={item.displayLogo} src={item.backgroundImage} />
            <Bubble borderRadius={item.borderRadius} backgroundColor={item.backgroundColor}>
              <Reply text={item.text}>{item.message}</Reply>
            </Bubble>
          </Inner>
        </Item>
      ))}
      <div
        data-aos-duration="750"
        data-aos="fade-up"
        className="hero__cta-wrapper"
        style={{ alignSelf: 'center' }}
      >
        <button className="hero__cta-button">Delegate a task</button>
      </div>
    </Container>
  );
}
