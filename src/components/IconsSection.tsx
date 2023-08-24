type IconsSectionProps = {
  icons: { light: string; dark: string; link: string }[];
  appMode: string;
};
function IconsSection({ icons, appMode }: IconsSectionProps) {
  return (
    <section className='icons-section'>
      <div className='icons'>
        {icons.map((icon, index) => {
          return (
            <a href={icon.link} target='_blank' key={index}>
              <img
                src={appMode === 'light' ? icon.light : icon.dark}
                alt='social-icon'
                className='icon'
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default IconsSection;
