import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import styled from "styled-components";

import useIntersection from "./index";

const story = storiesOf("Intersection Hook", module);

const Hud = styled.div`
  background: white;
  border-top: 1px solid #3e3e3e;
  bottom: 0;
  font-size: 2rem;
  left: 0;
  right: 0;
  opacity: 0.95;
  padding: 1rem;
  position: fixed;
`;

const Filler = styled.p`
  margin: 0;
  font-size: 4rem;

  & > :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Pre = styled.pre`
  padding: 1rem;
  background: #c0c0c0;
`;

function Demo({
  disableLogging,
  disableHud
}: {
  disableLogging?: boolean;
  disableHud?: boolean;
}) {
  const { ref, entry } = useIntersection({
    onChange: !disableLogging
      ? entry =>
          action("Intersect")({
            boundingClientRect: entry.boundingClientRect,
            isIntersecting: entry.isIntersecting
          })
      : undefined
  });

  return (
    <React.Fragment>
      {!disableHud && (
        <Hud>
          {entry && entry.isIntersecting
            ? "✅ is in view"
            : "🚫 is not in view"}
        </Hud>
      )}
      <Filler>
        Pariatur laboris velit pariatur cupidatat consequat officia proident
        dolor. Pariatur non nulla excepteur esse elit labore consequat irure
        voluptate sint labore. Anim cupidatat cupidatat sint ut sunt esse
        consectetur cillum elit anim. Fugiat ut non est incididunt in anim
        nostrud ullamco.
      </Filler>
      <Filler>
        Ex nulla non ex id officia dolor. Voluptate duis ad excepteur
        adipisicing. Est nostrud commodo adipisicing ullamco anim consequat
        eiusmod. Minim nulla Lorem cillum sint duis in laboris nostrud
        voluptate. Cillum irure culpa mollit sit.
      </Filler>
      <Pre ref={ref}>
        {entry && JSON.stringify(entry.boundingClientRect, null, 2)}
      </Pre>
      <Filler>
        Pariatur laboris velit pariatur cupidatat consequat officia proident
        dolor. Pariatur non nulla excepteur esse elit labore consequat irure
        voluptate sint labore. Anim cupidatat cupidatat sint ut sunt esse
        consectetur cillum elit anim. Fugiat ut non est incididunt in anim
        nostrud ullamco.
      </Filler>
      <Filler>
        Ex nulla non ex id officia dolor. Voluptate duis ad excepteur
        adipisicing. Est nostrud commodo adipisicing ullamco anim consequat
        eiusmod. Minim nulla Lorem cillum sint duis in laboris nostrud
        voluptate. Cillum irure culpa mollit sit.
      </Filler>
    </React.Fragment>
  );
}

story.add("hud", () => <Demo disableLogging />);
story.add("logger", () => <Demo disableHud />);
