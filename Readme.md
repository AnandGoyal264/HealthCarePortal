                     UseCase Diagram
           Healthcare Wellness & Preventive Care Portal

Entity1 Patient
Entity2 "Healthcare Provider" as Provider

rectangle "Healthcare Wellness Portal" {

  Patient --> (Register)
  Patient --> (Login)
  Patient --> (View Dashboard)
  Patient --> (Manage Profile)
  Patient --> (Set Wellness Goals)
  Patient --> (Log Daily Activities)
  Patient --> (View Preventive Reminders)
  Patient --> (View Public Health Info)
  Patient --> (Logout)

  Provider --> (Login)
  Provider --> (View Assigned Patients)
  Provider --> (View Patient Goals)
  Provider --> (Track Compliance Status)
  Provider --> (Review Preventive Checkups)
  Provider --> (Logout)

  (Login) <|-- (JWT Authentication)
  (Manage Profile) <|-- (Update Health Information)
  (View Dashboard) <|-- (Wellness Progress Overview)
}
