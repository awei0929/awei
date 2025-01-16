import { useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  Background,
  Connection,
  ControlButton,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import { observer } from 'mobx-react';

const initialNodes = [
  {
    id: '1',
    data: { label: 'choose' },
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    id: '2',
    data: { label: 'your' },
    position: {
      x: 100,
      y: 100,
    },
  },
  {
    id: '3',
    data: { label: 'desired' },
    position: {
      x: 0,
      y: 200,
    },
  },
  {
    id: '4',
    data: { label: 'edge' },
    position: {
      x: 100,
      y: 300,
    },
  },
];

const initialEdges = [
  {
    type: 'straight',
    source: '1',
    target: '2',
    id: '1',
    label: 'straight',
  },
  {
    type: 'step',
    source: '2',
    target: '3',
    id: '2',
    label: 'step',
  },
  {
    type: 'smoothstep',
    source: '3',
    target: '4',
    id: '3',
    label: 'smoothstep',
  },
  {
    source: '4',
    target: '5',
    id: '4',
    label: 'bezier',
  },
];

function EdgeTypesFlow() {
  // 节点
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  // 线
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // 新增线
  const onConnect = useCallback(
    (params: Connection) =>
      setEdges(eds => {
        console.log(params, 'params');
        return addEdge({ ...params, label: '999' }, eds);
      }),
    []
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      // 新增
      onConnect={onConnect}
      fitView
      minZoom={0.2}
      style={{ backgroundColor: '#F7F9FB' }}
    >
      <Controls>
        <ControlButton
          onClick={() =>
            setNodes(item => {
              const arr = [...item];

              arr.push({
                id: arr.length + 1 + '',
                data: { label: 'new' },
                position: {
                  x: 0,
                  y: 400,
                },
              });
              console.log(arr);
              return arr;
            })
          }
        >
          99
        </ControlButton>
      </Controls>

      <Background />
    </ReactFlow>
  );
}

export default observer(EdgeTypesFlow);
