import type { Activity } from "../types";
import { useMemo } from "react";
import CalorieDisplay from "./CalorieDisplay";

type CalorieTrackerPropr = {
  activities: Activity[];
};

export default function CalorieTracker({ activities }: CalorieTrackerPropr) {
  const caloriesConsumed = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  const caloriesBurnerd = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  const totalCalories = useMemo(
    () => caloriesConsumed - caloriesBurnerd ,[activities]);

  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Resumen de Calorias
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-18">
        <CalorieDisplay calories={caloriesConsumed} text="Consumidas" />
        <CalorieDisplay calories={caloriesBurnerd} text="Quemadas" />
        <CalorieDisplay calories={totalCalories} text="Diferencia" />
      </div>
    </>
  );
}
