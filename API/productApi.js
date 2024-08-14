export const fetchProducts = async () => {
    const response = await fetch('http://localhost:3001/toiletries');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  };