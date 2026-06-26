import { getPlantUmlUrl } from '../utils/plantUML';

type PreviewProps = {
  code: string;
};

const Preview = ({ code }: PreviewProps) => {
  return <img src={getPlantUmlUrl(code)} alt="PlantUML diagram" />;
};

export default Preview;
