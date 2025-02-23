import icons from '@/lib/icons';

const Icon = ({ icon, ...props }) => {
  const IconComponent = icons[icon]; // Get the icon from object

  if (!IconComponent) {
    console.error(`Icon "${icon}" not found in icons.js`);
    return null; // Prevent crashing
  }

  return <IconComponent {...props} />;
};

export default Icon;
