export interface User {
    id: number;
    name: string;
    workouts: Workout[];
    totalWorkouts: number;
    totalMinutes: number;
}

export const workoutOptions = [
    { value: 'Yoga', viewValue: 'Yoga' },
    { value: 'Cycling', viewValue: 'Cycling' },
    { value: 'Swimming', viewValue: 'Swimming' },
    { value: 'Running', viewValue: 'Running' },
    { value: 'Weightlifting', viewValue: 'Weightlifting' },
];

export interface Workout {
    type: string | null;
    minutes: number;
}