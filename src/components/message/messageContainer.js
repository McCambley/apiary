/* eslint-disable react/button-has-type */
import React, { useEffect, useLayoutEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Inner, Container, Item, Bubble, Title, Reply, Image } from './styledMessages';
import Message from './messageComponents';
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
        <Item data-aos={item.fade} data-aos-duration="9000">
          <Inner key={item.id} direction={item.direction}>
            <Image displayLogo={item.displayLogo} src={item.backgroundImage} />
            <Bubble borderRadius={item.borderRadius} backgroundColor={item.backgroundColor}>
              <Reply text={item.text}>{item.message}</Reply>
            </Bubble>
          </Inner>
        </Item>
      ))}
      <div className="hero__cta-wrapper" style={{ alignSelf: 'center' }}>
        <button className="hero__cta-button">Delegate a task</button>
      </div>
    </Container>
  );
}
