export const fetchGraphData = async () => {
    const response = await fetch('http://localhost:3000/api/v1/123/actions/blueprints/bp_456/bpv_123/graph');
    if (!response.ok) {
      throw new Error('Failed to fetch graph data');
    }
    const data = await response.json();
    return data;
  };
  