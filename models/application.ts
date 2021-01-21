export interface Restaurant {
  id: string;
  label: string;
}

export interface Properties {}

export interface Choice {
  id: string;
  label: string;
}

export interface Field {
  id: string;
  title: string;
  type: string;
  ref: string;
  properties: Properties;
  choices?: Choice[];
  allow_multiple_selections?: boolean;
  allow_other_choice?: boolean;
}

export interface Definition {
  id: string;
  title: string;
  fields: Field[];
}

export interface Field2 {
  id: string;
  type: string;
  ref: string;
}

export interface Choice2 {
  label: string;
}

export interface Choices {
  labels: string[];
}

export interface Answer {
  type: string;
  text?: string;
  field?: Field2;
  choice?: Choice2;
  date?: string;
  choices?: Choices;
  file_url?: string;
  file_url2?: string;
  phone_number?: string;
  email?: string;
}

export interface FormResponse {
  form_id: string;
  token: string;
  landed_at: string;
  submitted_at: string;
  definition: Definition;
  answers: Answer[];
}

export interface IApplication {
  id: string;
  event_id: string;
  event_type: string;
  restaurant: Restaurant;
  form_response: FormResponse;
}
