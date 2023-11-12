type IntroProps = { appMode: string };
function Intro({ appMode }: IntroProps) {
  return (
    <section className='container intro'>
      <div className={appMode == 'light' ? 'light-text' : 'dark-text'}>
        <h2>MAHMUD SUBERU</h2>
        <h4>Co-founder and Ceo of Omnihale</h4>
      </div>
    </section>
  );
}

export default Intro;
