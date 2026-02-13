import React from 'react';

type TeamsDisplayV0Props = {
  teamMembers: {
    name: string;
    role: string;
    bio: string[];
    image: string[];
  }[];
}

const MAX_TEXT_LENGTH = 65; 
function TeamsDisplayV0({ teamMembers = [] }: TeamsDisplayV0Props) {
    if( teamMembers.length === 0 ) return <div className="no-info"><h2>There are no teams to display</h2></div>;
  return (
    <TeamsDisplayV0Wrapper>
        {
            teamMembers.map((v, i) => {
                const previewText = v.bio[0].slice(0, MAX_TEXT_LENGTH);
                const nameArr = v.name.split(" ");
                const firstName = nameArr[0];
                const lastName = nameArr.slice(1).join(" ");

                return (<div key={i} className="team-member-card">
                            <div className="image-box">
                                <img src={v.image[0]} alt={v.name} />
                                <img src={v.image[1]} alt={v.name} />
                            </div>
                            <div className="info-box">
                                <h3>
                                    <span className="first-name">{firstName}</span>
                                    <span className="last-name">{` ${lastName}`}</span>
                                </h3>
                                <h4>{v.role}</h4>
                                <div className="bio">{previewText}...<button>Read full bio</button></div>
                            </div>
                        </div>)
            })
        }
    </TeamsDisplayV0Wrapper>
  )
}

export default TeamsDisplayV0;

import styled from 'styled-components';

const TeamsDisplayV0Wrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  .team-member-card {
    width: 100%;
    height: 650px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;

    .image-box {
        width: 100%;
        height: 70%;
        background-color: #ccc;
        position: relative;

        filter: grayscale(100%) brightness(100%);
        overflow: hidden;

        -webkit-transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);
        -moz-transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);
        -ms-transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);
        transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);

        img {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            position: absolute;
            top: 0; left: 0;
            z-index: 0;

            transform-origin: center center;
            -webkit-transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);
            -moz-transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);
            -ms-transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);
            transition: all 1.0s cubic-bezier(0.16, 1, 0.3, 1);
        }
        img:nth-child(1) {
            opacity: 1;
        }
        img:nth-child(2) {
            opacity: 0;
            z-index: 1;
        }
    }

    .image-box:hover {
        filter: grayscale(0%) brightness(100%);
        img {
            transform: scale(1.2) rotate(-5deg);
        }
        img:nth-child(1) {
            opacity: 0;
        }
        img:nth-child(2) {
            opacity: 1;
        }
    }

    .info-box {
        height: 30%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        position: relative;
        line-height: 1.2;
        letter-spacing: -0.01em;
        h3 {
            font-size: var(--mw-font-size-x-large);
            font-weight: 700;
            color: #222;

            .first-name {
                font-weight: 900;
            }
            .last-name {
                font-weight: 300;
            }
        }
        h4 {
            font-size: var(--mw-font-size-large);
            font-weight: 500;
        }
        .bio {
            font-size: clamp(12px, 2vw, 18px);
            font-weight: 400;
            color: #555;

            button {
                background: none;
                font-size: clamp(12px, 2vw, 16px);
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            button:hover {
                color: #111;
            }
        }
    }
  }
`;