function UserCard({ name, role, status, avatarUrl }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      width: '200px',
      fontFamily: 'sans-serif'
    }}>
      <img 
        src={avatarUrl} 
        alt={name} 
        style={{ width: '100%', borderRadius: '4px' }} 
      />
      <h3>{name}</h3>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Status:</strong> {status}</p>
    </div>
  );
}

// Main App component
export default function App() {
  // Object containing all prop data
  const userData = {
    name: "Alex Rivera",
    role: "Frontend Developer",
    status: "Active",
    avatarUrl: "https://via.placeholder.com/150"
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Profile</h2>
      
      {/* Spread syntax unpacks all keys in userData directly into props */}
      <UserCard {...userData} />
    </div>
  );
}