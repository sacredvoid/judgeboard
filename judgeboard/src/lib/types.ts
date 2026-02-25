export interface Hackathon {
  id: string;
  name: string;
  organizer: string;
  date: string;
  deadline: string;
  location: string;
  locationType: "in-person" | "virtual" | "hybrid";
  topics: string[];
  rolesNeeded: ("judge" | "mentor")[];
  experienceLevel: "any" | "senior" | "expert";
  applyUrl: string;
  description: string;
  immigrationEligible: boolean;
}

export interface Filters {
  locationType: string;
  topic: string;
  experienceLevel: string;
  roleNeeded: string;
}
