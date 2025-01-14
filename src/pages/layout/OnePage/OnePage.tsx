import { useStores } from '@/store';
import { observer } from 'mobx-react';
import { useEffect } from 'react';

function OnePage() {
  const store = useStores();

  useEffect(() => {
    store.app.initAppointAll();
  }, []);

  return <div>OnePage</div>;
}

const ObservedOnePage = observer(OnePage);

export default ObservedOnePage;
