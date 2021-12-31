import { useState, useEffect } from "react";
export function Dashboard() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cuartos")
      .then((response) => response.json())
      .then((rooms) => setRooms(rooms));
  }, []);

  return (
    <div className="dashboard">
      ACA IRA EL DASHBOARD{" "}
      {rooms.map((room) => (
        <div>{room?.suite?.total}</div>
      ))}
    </div>
  );
}
