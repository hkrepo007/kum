export interface UserData {
  name: string
  age: number
  gender: string
  category?: string
  income: number
  occupation?: string
  education?: string
  district: string
}

export interface SchemeResponse {
  success: boolean
  user: string
  schemes: string
}

export interface SchemeDetails {
  scheme_name: string
  roadmap: string
  duration: string
  application_process: string
  source_url: string
}

export interface SchemeDetailsResponse {
  success: boolean
  details: SchemeDetails
}
