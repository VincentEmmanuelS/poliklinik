export default function AnotherPage2Layout({ children }) {
  return (
    <div style={{ backgroundColor: 'lightgray', padding: '20px' }}>
      <h2>AnotherPage2 Layout</h2>
      {children}
    </div>
  );
}

// export default function AnotherPage2Layout({ children }) {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {children}
//     </div>
//   );
// }

