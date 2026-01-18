flowchart TD
    %% User Types
    User{User Type} --> PatientRole[Patient]
    User --> ProviderRole[Healthcare Provider]

    %% Authentication Flow
    PatientRole & ProviderRole --> Auth[Secure JWT Login & Consent]
    Auth --> Session[Role-Based Session Managed] [cite: 32]

    %% Patient Flow
    subgraph Patient_Journey [Patient Dashboard]
        direction TB
        P1(Log Daily Activities: Steps/Water) --> P2(Update Health Profile: Meds/Allergies)
        P2 --> P3(View Wellness Progress)
        P3 --> P4(View Preventive Reminders)
    end
    Session -.-> Patient_Journey [cite: 33, 35, 48]

    %% Provider Flow
    subgraph Provider_Journey [Healthcare Provider View]
        direction TB
        D1(View Assigned Patient List) --> D2(Review Patient Goals)
        D2 --> D3(Track Compliance Status)
    end
    Session -.-> Provider_Journey [cite: 40, 44]

    %% Shared Resources
    Patient_Journey & Provider_Journey --> Info[Public Health Info Page] [cite: 45]
    Info --> Logout[Secure Logout]
