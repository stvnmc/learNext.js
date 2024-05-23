"use client";

import { useRouter } from "next/navigation";
import React from "react";

const New = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    const res = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    router.push("/");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Titulo de la tarea</label>
        <input type="text" id="title" placeholder="Titulo" />

        <label htmlFor="description">Descripcion de la tarea</label>
        <textarea
          rows="3"
          id="description"
          placeholder="Describe tu tarea"
        ></textarea>

        <button>Crear</button>
      </form>
    </div>
  );
};

export default New;
