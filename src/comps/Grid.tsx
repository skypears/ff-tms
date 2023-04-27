import Link from 'next/link';
interface GridProps {
    icon?: string;
    name?: string;
    variant: 'small' | 'large' | 'normal' | 'wide';
};
const Grid = ({ icon, name, variant }: GridProps) => {
  const _id = name?.toLowerCase().split(' ').join("-");
  return (
    <Link href={`/${_id}`} className={`grid default grid_${variant}`} id={_id}>
      <div className="grid__icon">
      <img src={`../../assets/icons/tms-icons-white/${icon}.png`} alt="icon" height={64} />
      </div>
      <div className="grid__name">{name || 'Default Name'}</div>
    </Link>
  );
};

export default Grid