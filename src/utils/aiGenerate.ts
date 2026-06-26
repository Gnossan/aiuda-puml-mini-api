export async function generatePlantUML(prompt: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const puml = `@startuml
' Generated from prompt: ${prompt}
actor User
User --> (Perform action)
@enduml`;
      resolve(puml);
    }, 1000);
  });
}
