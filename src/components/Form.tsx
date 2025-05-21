import { useState } from "react";
import type { Activity } from "../types/";
import { categories } from "../data/categories";

export default function Form() {
  const [activity, setActivity] = useState<Activity>({
    name: "",
    calories: 0,
    category: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    const isNumberField = ['category', 'calories'].includes(e.target.id) // detecta si el campo que se modifica es o no un number

    console.log(isNumberField)

    setActivity({
      ...activity,
      [e.target.id]: isNumberField? +e.target.value : e.target.value
    })
    console.log(e.target.value);
  };

  const isValidActivity = () =>{
    const { name, calories } = activity
    return name.trim() !== '' && calories > 0
  }

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) =>{

  }

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">
          Categoría:{" "}
        </label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">
          Actividad:{" "}
        </label>
        <input
          id="name"
          type="text"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. Comida, Ejercicio"
          value={activity.name}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">
          Calorias:{" "}
        </label>
        <input
          id="calories"
          type="number"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Calorias. Ej. 300, 500"
          value={activity.calories}
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
        value="Guardar comida o ejercicio"
        disabled={!isValidActivity()}
      />
    </form>
  );
}
