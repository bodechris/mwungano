'use client';

import React from 'react';
import { useGlobalAppStates } from '@/context/GlobalAppProvider';
import PageLayoutV0 from '@/components/page-layout-v0/PageLayoutV0';
import TransitionLink from '@/components/transition/TransitionLink';
import Image from 'next/image';

function Page() {
  const { colors } = useGlobalAppStates();
  return (
    <>
    <PageLayoutV0>
      <div className="sect-page-header">
        <h1>About Mwnungano</h1>
        <h2>Who We Are.</h2>
        <p>An alliance built for pan-African reputation work.</p>
      </div>
    </PageLayoutV0>
    <PageLayoutV0>
      <div className="sect page-sect-2">
        <div className="sub-sect full-sect">
          <div className="media-full-img-1">
            <Image src="/images/about-1.webp" alt="About Mwungano" width={1536} height={1024} />
          </div>
        </div>
        <div className="sub-sect style-1">
          <p className="full-w-text">A pan‑African entrepreneurial consultancy specializing in strategic brand, communications, public relations, market entry, and sustainability communications. <b>Derived from the Swahili word for “Alliance,” </b>Mwungano brings together deep African insight, global standards, and purpose‑led thinking to help organisations build reputations that drive real impact.</p>
          <p className="half-w-text">Mwungano is headquartered in Johannesburg, with a satellite outreach in the United Kingdom to support pan-African and international outreach needs. </p>
          <p className="half-w-text">Through client activity and strategic partners, we support work across Anglophone, Francophone, and Lusophone markets.</p>
        </div>
        <div className="sub-sect">
          <h3>Purpose-led communications — grounded in trust.</h3>
          <p>We help organisations align the numbers and the narrative — advising with discipline, authenticity, and consistency to strengthen stakeholder confidence and long-term credibility.</p>
        </div>
      </div>
      
    </PageLayoutV0>
    <PageLayoutV0>
      <div className="sect page-sect-3">
        <div className="sub-sect list-1">
          <h3>Company highlights</h3>
          <ul>
            <li>Founded in 2020 by a team of senior communications and professionals with deep pan-African experience.</li>
            <li>Trusted by leading organisations across the corporate, financial, and development sectors.</li>
            <li>Recognized for excellence in strategic communications, storytelling, and market entry work.</li>
            <li>Awarded “Best New Consultancy” at the 2022 African Corporate Excellence Awards.</li>
          </ul>
        </div>        
        <div className="sub-sect">
          <div className="media-full-img-1">
            <Image src="/images/about-1.webp" alt="About Mwungano" width={1536} height={1024} />
          </div>
        </div>
      </div>
    </PageLayoutV0>
    </>
  )
}

export default Page;