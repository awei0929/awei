import { useStores } from '@/store';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import ReactFlow from './ReactFlow';

function OnePage() {
  const store = useStores();

  useEffect(() => {
    store.app.initAppointAll();
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow />
    </div>
  );
}

export default observer(OnePage);
