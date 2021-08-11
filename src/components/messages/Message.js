/* eslint-disable react/prop-types */
import React from 'react';
import { Inner, Container, Item, Bubble, Title, Reply, Image } from './StyledMessages';

export default function Message({ children, direction = 'row', ...restProps }) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Message.Container = function MessageContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Message.Bubble = function MessageBubble({ borderRadius, backgroundColor, children, ...restProps }) {
  return (
    <Bubble backgroundColor={backgroundColor} borderRadius={borderRadius} {...restProps}>
      {children}
    </Bubble>
  );
};
Message.Reply = function MessageReply({ text, children, ...restProps }) {
  return (
    <Reply text={text} {...restProps}>
      {children}
    </Reply>
  );
};
Message.Title = function MessageTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Message.Image = function MessageImage({ backgroundImage, displayLogo, ...restProps }) {
  return <Image backgroundImage={backgroundImage} displayLogo={displayLogo} {...restProps} />;
};
