import type { Activity } from "../types";

export type ActiivtyActions = {
    type: 'save-activity', payload: {newActivity: Activity}
};

type ActivityState = {
  activities: Activity[];
};

export const initialState: ActivityState = {
  activities: [],
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActiivtyActions
) => {

    
};
