'use client';

import React from 'react';
import { useGlobalAppStates } from '@/context/GlobalAppProvider';
import PageLayoutV0 from '@/components/page-layout-v0/PageLayoutV0';

function Page() {
  const { colors } = useGlobalAppStates();
  return (
    <PageLayoutV0>
      <h1>Mwungano Privacy Policy</h1>
      <h2>Privacy Policy</h2>
    </PageLayoutV0>
  )
}

export default Page;