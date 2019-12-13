import React from 'react'
import styled, { css } from 'styled-components'
import { Book } from './Images'
import { Spacer } from './Spacer'

const TimelineContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
  & .timeline-container {
    width: 58.59vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    & .timeline-stick {
      z-index: -1;
      position: absolute;
      width: 0.48vw;
      height: 52vw;
      border-radius: 100vw;
      background-color: #51ac2b;
    }
    & .timeline-item-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 1vw 0;
    }
  }
`

const TimelineItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 58.59vw;
  justify-content: space-between;
  align-items: center;
  margin: 0vw 0;
  & .ti-center {
    width: 1.75vw;
    height: 1.75vw;
    background: #51ac2b;
    border-radius: 100vw;
  }
  & .ti-left,
  & .ti-right {
    flex: 1;
    height: 12.5vw;
    width: 25vw;
    margin: 2vw;
    justify-content: center;
    align-items: center;
  }
`

const TimelineItemContentWrapper = styled.div`
  display: flex;
  box-shadow: 0px 0px 1vw lightgrey;
  width: 100%;
  height: 100%;
  flex-direction: column;
  & .timeline-item-content {
    margin: 2vw;
    & h1 {
      font-size: 1.56vw;
      line-height: 1.56vw;
    }
    & p {
      font-size: 1.18vw;
      line-height: 1.56vw;
    }
  }
`

const TimelineItemLeft: React.SFC = props => (
  <div className="ti-left">{props.children}</div>
)

const TimelineItemRight: React.SFC = props => (
  <div className="ti-right">{props.children}</div>
)

const TimelineItemCenter: React.SFC = props => <div className="ti-center" />

const TimelineItem: React.SFC<{ right?: boolean; left?: boolean }> = props => (
  <TimelineItemWrapper>
    <TimelineItemLeft>{props.left && props.children}</TimelineItemLeft>
    <TimelineItemCenter />
    <TimelineItemRight>{props.right && props.children}</TimelineItemRight>
  </TimelineItemWrapper>
)

const LinkWrapper = styled.div`
  & a {
    margin: 0;
    padding: 0;
    & span {
      cursor: pointer;
      margin: 0;
      padding: 0;
      font-weight: bold;
      line-height: 1.3vw;
      font-size: 1.3vw !important;
      &:hover {
        color: grey;
      }
    }
  }
`

const Link = () => (
  <LinkWrapper>
    <a
      onClick={() =>
        alert(
          'These links are coming soon. These links should point to their own crowd-funding campaigns.'
        )
      }
    >
      <span>Read More</span>
    </a>
  </LinkWrapper>
)

export const Timeline = (props: { children?: any; bold?: boolean }) => (
  <TimelineContainerWrapper>
    <div className="timeline-container">
      <div className="timeline-stick" />
      <div className="timeline-item-container">
        <TimelineItem right>
          <TimelineItemContentWrapper>
            <div className="timeline-item-content">
              <h1>Bio-Truck</h1>
              <Spacer height={1} />
              <p>
                Our first project. We want to travel around ecovillages to
                introduce our idea.
              </p>
              <Spacer height={1} />
              <Link />
            </div>
          </TimelineItemContentWrapper>
        </TimelineItem>
        <TimelineItem left>
          <TimelineItemContentWrapper>
            <div className="timeline-item-content">
              <h1>Sufficient Ecovillage</h1>
              <Spacer height={1} />
              <p>
                Once we get the feedback from our project, we'll work with the
                best candidate to achieve the goal.
              </p>
              <Spacer height={1} />
              <Link />
            </div>
          </TimelineItemContentWrapper>
        </TimelineItem>
        <TimelineItem right>
          <TimelineItemContentWrapper>
            <div className="timeline-item-content">
              <h1>Self-sufficiency Guide</h1>
              <Spacer height={1} />
              <p>
                Once the other two objectives are complete we would like to let
                you know how to achieve this goal.
              </p>
              <Spacer height={1} />
              <Link />
            </div>
          </TimelineItemContentWrapper>
        </TimelineItem>
      </div>
    </div>
  </TimelineContainerWrapper>
)
