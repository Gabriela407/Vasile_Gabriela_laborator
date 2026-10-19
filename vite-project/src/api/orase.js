const API_URL = 'https://jsonplaceholder.typicode.com';

// Preia toți utilizatorii
export async function fetchUsers() {
  const response = await fetch(`${API_URL}/users`);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
}

// Preia un singur utilizator după ID
export async function fetchUserById(id) {
  const response = await fetch(`${API_URL}/users/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
}