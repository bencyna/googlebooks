import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:3001";

export default function Socket() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("connection", (data) => {
      setResponse(data);
    });
  }, []);

  return (
    <div>
      <p>
        It's <time dateTime={response}>{response}</time>
      </p>
    </div>
  );
}
