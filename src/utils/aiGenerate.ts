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

export async function explainPlantUML(code: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const explanation = `Explanation for PlantUML code:\n\n${code}\n\nThis diagram contains PlantUML syntax that describes a visualization.`;
      resolve(explanation);
    }, 1000);
  });
}
