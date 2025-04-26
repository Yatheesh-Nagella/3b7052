import { useEffect, useState } from 'react';
import ReactFlow, { Background, Controls, MiniMap, useEdgesState, useNodesState } from 'reactflow';
import { fetchGraphData } from '../../api/GraphService';
import { useSelectedNode } from '../../contexts/SelectedNodeContext';
import 'reactflow/dist/style.css';

const GraphView = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { setSelectedNode } = useSelectedNode();

  useEffect(() => {
    async function loadGraph() {
      try {
        const data = await fetchGraphData();

        // map API format to ReactFlow nodes/edges format
        const mappedNodes = data.nodes.map((node: any) => ({
          id: node.id,
          data: { label: node.name },
          position: { x: Math.random() * 500, y: Math.random() * 500 }, // random position for now
        }));

        const mappedEdges = data.edges.map((edge: any) => ({
          id: `${edge.source}-${edge.target}`,
          source: edge.source,
          target: edge.target,
        }));

        setNodes(mappedNodes);
        setEdges(mappedEdges);
      } catch (error) {
        console.error('Error loading graph', error);
      }
    }
    loadGraph();
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow 
        nodes={nodes} 
        edges={edges} 
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={(event, node) => {
            setSelectedNode(node);
          }}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default GraphView;
