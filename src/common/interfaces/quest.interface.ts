export default interface Quest {
  title: string;
  description: string;
  goal: string;
  steps: string[];
  rewards?: string[];
  isCompleted: boolean;
}
