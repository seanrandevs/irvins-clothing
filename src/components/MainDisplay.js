import shirt1 from '../assets/images/shirt6.jpg'
import shirt2 from '../assets/images/shirt7.jpg'
import shirt3 from '../assets/images/shirt8.jpg'


const MainDisplay = () => {
  return (
    <>
    <div className="main-img">
      <img src={shirt1} alt="" />
      <img src={shirt2} alt="" />
      <img src={shirt3} alt="" />
    </div>
      <div className="slider">
        <div className="slides">
       <input type="radio" name="radio-btn" id="radio1" />
       <input type="radio" name="radio-btn" id="radio2" />
       <input type="radio" name="radio-btn" id="radio3" />
          
       <div className="slide first">
        <img src='/images/shirt6.jpg' alt="" />
       </div>
       <div className="slide">
        <img src='/images/shirt7.jpg' alt="" />
       </div>
       <div className="slide">
        <img src='/images/shirt8.jpg' alt="" />
       </div>

        <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
        </div> 
      </div>

        <div className="navigation-manual">
            <label htmlFor="radio1" className="manual-btn"></label>
            <label htmlFor="radio2" className="manual-btn"></label>
            <label htmlFor="radio3" className="manual-btn"></label>
        </div>

    </div>

      <div className="section-title">
        <h2>Products</h2>
      </div>
  </>
  )
}

export default MainDisplay