import axios from "../utils/axiosInstance";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const ordersResponse = await axios.get('/order');
      const ordersData = ordersResponse.data;
      const ordersWithUsersData = await Promise.all(ordersData.map(async (order) => {
        const userResponse = await axios.get(`/api/user/${order.client_id}`);
        const userData = userResponse.data;
        return {
          ...order,
          user: userData,
        };
      }));
      setOrders(ordersWithUsersData);
    }

    fetchData();
  }, []);

  console.log(data)
  return (
    <div className="w-full">
      <h1 className="text-center text-4xl font-bold">Recent Orders</h1>
      <hr className="my-5" />
      <div>
      {orders.map((order) => (
        <div key={order.id}>
          <p>Order ID: {order.id}</p>
          <p>Order Date: {order.date}</p>
          <p>User ID: {order.userId}</p>
          <p>User Name: {order.user.name}</p>
          <p>User Email: {order.user.email}</p>
          {/* Add more order and user fields here */}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Orders;
