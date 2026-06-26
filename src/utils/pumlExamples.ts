export const pumlExamples = {
  sequence: `@startuml
Alice -> Bob: Hello
@enduml`,
  class: `@startuml
class Person
Person "1" --> "*" Ticket
@enduml`,
  usecase: `@startuml
user --> (Use case)
@enduml`,
} as const;
