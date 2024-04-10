import '../style/Watch.css';

const Watch = () => {
  return (
    <section className="watch-container w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row  border-b-[1px] font-titleFont border-b-gray-700">
      <div className="watch-content">
        <h2 className="text-base font-title Font mt-5 text-white text-lg heading" style={{ fontSize: '15rem', fontFamily: 'Calibri' }}>
          <b>Watch</b><span className="dot">.</span>
        </h2>
        <br/><br/><br/><br/><br/><br/>
        <p className="text-base font-title Font text-white sub" style={{ fontSize: '2rem', fontFamily: 'Calibri', letterSpacing: '0.5px', lineHeight: '1.5', color: '#ccc' }}>
          Bring saw gathering kind evening them air him void morning dominion spirit multiply seas shall day were likeness. Upon tree a gathering.
        </p>

        {/* Rectangular button with text "Project" and white border */}
        <div className="project-button">
          <button className="project-button-text">SEE PROJECT</button>
        </div>
      </div>
    </section>
  );
};

export default Watch;