import { v4 as uuidv4 } from 'uuid';

export default function getImageName(userId) {
  const imgName = userId + '_' + uuidv4() + '.jpg';
  return imgName;
}
