"use client";
import { useEffect, useState } from "react";

const SystemInfo = () => {
  const [lastUpdated, setLastUpdated] = useState("Unknown");
  const [connectionInfo, setConnectionInfo] = useState({
    type: "Unavailable",
    rtt: null,
    downlink: null,
  });

  useEffect(() => {
    // Get Last Updated from environment
    const timestamp = process.env.NEXT_PUBLIC_COMMIT_TIMESTAMP;
    if (timestamp) {
      const formatted = new Date(timestamp).toLocaleString();
      setLastUpdated(formatted);
    }

    // Get connection info
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
      setConnectionInfo({
        type: window.location.protocol || null,
        rtt: connection.rtt || null,
        downlink: connection.downlink || null,
      });
    }
  }, []);

  return (
    <>
      <div className=" mr-1 text-xs flex ">
        Last updated: <p className=" ml-1 ">{lastUpdated}</p>
      </div>
      <div className=" mr-1 text-xs  flex space-x-1 ">
        {connectionInfo && <p>🔗:{connectionInfo.type == "https:" ? <span className=" text-blue-700">Secure</span> : <span className=" text-red-600">Unsecure</span>}</p>}
        {connectionInfo && <p>🔁:{connectionInfo.rtt !== null ? connectionInfo.rtt : "N/A"}ms</p>}
        {connectionInfo && <p>🛜:{connectionInfo.downlink !== null ? connectionInfo.downlink : "N/A"}Mbps</p>}
      </div>
    </>
  );
};

export default SystemInfo;
