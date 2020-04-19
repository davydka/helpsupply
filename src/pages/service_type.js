/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useContext, useEffect, useState } from 'react';

import { buildServicesOptions } from 'lib/utils/services';
import { useAuth } from 'hooks/useAuth';

import Page from 'components/layouts/Page';
import ServiceTypeForm from 'containers/ServiceTypeForm';
import { ErrorContext } from 'state/ErrorProvider';

function ServiceType({ backend }) {
  const { isInitializing } = useAuth();
  const { setError } = useContext(ErrorContext);
  const [serviceOptions, setServiceOptions] = useState();
  const [zip, setZip] = useState();

  useEffect(() => {
    if (isInitializing) {
      return;
    }
    backend
      .getServiceUser()
      .then(({ data }) => {
        const sOpts = buildServicesOptions(backend.getServicesForZip(data.zip));
        setServiceOptions(sOpts);
        setZip(data.zip);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, [backend, isInitializing, setError]);

  return (
    <Page currentProgress={4} totalProgress={5}>
      <ServiceTypeForm
        backend={backend}
        serviceOptions={serviceOptions}
        zip={zip}
      />
    </Page>
  );
}

export default ServiceType;
