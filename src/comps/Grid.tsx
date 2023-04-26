import {DiCodeigniter} from 'react-icons/di'
interface GridProps {
    icon?: string;
    name?: string;
    variant: 'small' | 'large' | 'normal' | 'wide';
};
const Grid = ({ icon, name, variant }: GridProps) => {
  const _id = name?.toLowerCase().split(' ').join("_");
  return (
    <div className={`grid grid_${variant}`} id={_id}>
      <div className="grid__icon">
      <img src={`../../assets/icons/tms-icons-white/${icon}.png`} alt="icon" height={64} />
      </div>
      <div className="grid__name">{name || 'Default Name'}</div>
    </div>
  );
};

export default Grid