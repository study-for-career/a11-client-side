// 3 photos slider
const Slider = () => {
    return (
        <div>

            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/KF49F9k/10035089.jpg"
                        className="w-full max-h-[500px] object-fill" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>

                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/D82nGzV/5993204.jpg"
                        className="w-full max-h-[500px] object-fill" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>

                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/gthYjtL/back-to-school-web-banner-28.jpg"
                        className="w-full max-h-[500px] object-fill" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Slider;