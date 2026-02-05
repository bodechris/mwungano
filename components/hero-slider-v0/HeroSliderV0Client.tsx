'use client';

import { useState } from 'react';
import TransitionLink from '../transition/TransitionLink';
import Image from 'next/image';

type HeroSliderItemType = {
    title: string,
    description: string,
    cta: string,
    ctaurl: string,
    mediasrc: string
}

type HeroSliderV0ClientType = {
    slides: HeroSliderItemType[]
}
function HeroSliderV0Client({ slides=[] }: HeroSliderV0ClientType) {
    const [activeSlideInd, setActiveSlideInd] = useState(0);
  return (
    <>
        <div className="all-slides">
            {
            slides.map((v, i) => {
                return (<div key={i} className={`slider-item ${ i === activeSlideInd ? 'active' : '' }`}>
                        <div className="info-box">
                            <h2 dangerouslySetInnerHTML={{__html: v.title}}></h2>
                            <p>{v.description}</p>
                            <TransitionLink href={v.ctaurl}>{v.cta}</TransitionLink>
                        </div>
                        <div className="media-box">
                            <Image src={v.mediasrc} width={1000} height={600} alt="Mwungano" />
                        </div>
                        </div>)
            })
            }
        </div>
        <div className="slide-controls">
            {
                slides.map((v, i) => (<button key={i} onClick={() => setActiveSlideInd(i) }></button>))
            }
        </div>    
    </>
  )
}

export default HeroSliderV0Client