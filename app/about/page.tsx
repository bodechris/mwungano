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
        <p>An Alliance Built to Shape Reputations</p>
      </div>
    </PageLayoutV0>
    <PageLayoutV0>
      <p>Mwungano is a pan‑African entrepreneurial consultancy specializing in strategic brand, communications, public relations, market entry, and ESG & sustainability communications. Derived from the Swahili word for “Alliance,” Mwungano brings together deep African insight, global standards, and purpose‑led thinking to help organisations build reputations that drive real impact.</p>
    </PageLayoutV0>
    </>
  )
}

export default Page;