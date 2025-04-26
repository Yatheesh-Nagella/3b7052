export const fetchGraphData = async () => {
    const response = await fetch('http://localhost:3000/api/v1/test/actions/blueprints/example/graph');
    if (!response.ok) {
      throw new Error('Failed to fetch graph data');
    }
    const data = await response.json();
    return data;
  };
  