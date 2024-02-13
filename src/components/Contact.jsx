import React from "react";
import { useParams } from "react-router";

const Contact = () => {
  const { country } = useParams();

  if (country === "usa") {
    return <p>1 Homerville, Marge Town</p>;
  }
  if (country === "uk") {
    return <p>5 Burns Street, Moe Village</p>;
  }

  console.log(country);

  return <div>Contact Page</div>;
};

export default Contact;
