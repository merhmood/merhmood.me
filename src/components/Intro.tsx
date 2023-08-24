type IntroProps = { appMode: string };
function Intro({ appMode }: IntroProps) {
  return (
    <section className='container intro'>
      <div className={appMode == 'light' ? 'light-text' : 'dark-text'}>
        <h2>MAHMUD SUBERU</h2>
        <h4>Software Engineer from Nigeria</h4>
      </div>
    </section>
  );
}

export default Intro;
