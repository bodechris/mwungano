'use client';

import React from 'react';
import { useGlobalAppStates } from '@/context/GlobalAppProvider';
import PageLayoutV0 from '@/components/page-layout-v0/PageLayoutV0';

function Page() {
  const { colors } = useGlobalAppStates();
  return (
    <PageLayoutV0>
      <h1>Mwungano Terms of Service</h1>
      <h2>Terms and Conditions</h2>
    </PageLayoutV0>
  )
}

export default Page;