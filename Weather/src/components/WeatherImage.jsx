import React from 'react';

function WeatherImage({ weatherType }) {
    const WeatherImages = {
        sunny: '<iframe src="https://lottie.host/embed/b3445e94-0535-4253-920c-9f6922580760/0U3t3eTaH6.json"></iframe>',
        clouds: '<iframe src="https://lottie.host/embed/f68ec2d2-eca4-4872-a024-e951a02fdbc8/wO43x1UaMD.json"></iframe>',
        clear: '<iframe src="https://lottie.host/embed/4e75c854-5950-4d5d-8ced-93f0c479983e/dg64gJI6k0.json"></iframe>',
        Rain: '<iframe src="https://lottie.host/embed/8e7e2cd8-3b31-4680-8f5c-7ad6d715a31d/WamHQWSsDM.json"></iframe>',
        Stormy: '<iframe src="https://lottie.host/embed/1c9ee0ba-f7ba-424f-88fa-0eface917579/KUGsPowWom.json"></iframe>',
        Cold: '<iframe src="https://lottie.host/embed/93e43033-c69b-40d5-bfa6-545b96748f63/qVdZFyIJCj.json"></iframe>',
        Haze:'<iframe src="https://lottie.host/embed/2715cd68-52df-4313-80ee-43ab4186cdfd/Wru1fXuGZl.json"></iframe>'
    };
    return (
        <div dangerouslySetInnerHTML={{ __html: WeatherImages[weatherType] }} />
    );
}

export default WeatherImage;
