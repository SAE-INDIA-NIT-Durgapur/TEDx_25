import InfiniteSlider from "./Carousel";

const InfiniteSliderBasic = () => {
  return (
    <InfiniteSlider gap={24} reverse className="w-full h-full bg-white">
      <img
        src="https://motion-primitives.com/apple_music_logo.svg"
        alt="Apple Music logo"
        className="h-[120px] w-auto"
      />
      <img
        src="https://motion-primitives.com/chrome_logo.svg"
        alt="Chrome logo"
        className="h-[120px] w-auto"
      />
      <img
        src="https://motion-primitives.com/strava_logo.svg"
        alt="Strava logo"
        className="h-[120px] w-auto"
      />
      <img
        src="https://motion-primitives.com/nintendo_logo.svg"
        alt="Nintendo logo"
        className="h-[120px] w-auto"
      />
      <img
        src="https://motion-primitives.com/jquery_logo.svg"
        alt="Jquery logo"
        className="h-[120px] w-auto"
      />
      <img
        src="https://motion-primitives.com/prada_logo.svg"
        alt="Prada logo"
        className="h-[120px] w-auto"
      />
    </InfiniteSlider>
  );
};

const InfiniteSliderHoverSpeed = () => {
  return (
    <InfiniteSlider durationOnHover={75} gap={24}>
      <img
        src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
        alt="Dean blunt - Black Metal 2"
        className="aspect-square w-[120px] rounded-[4px]"
      />
      <img
        src="https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141"
        alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
        className="aspect-square w-[120px] rounded-[4px]"
      />
      <img
        src="https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf"
        alt="Yung Lean - Stardust"
        className="aspect-square w-[120px] rounded-[4px]"
      />
    </InfiniteSlider>
  );
};

const InfiniteSliderVertical = () => {
  return (
    <div className="flex h-[350px] space-x-4">
      <InfiniteSlider direction="vertical">
        <img
          src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
          alt="Dean blunt - Black Metal 2"
          className="aspect-square w-[120px] rounded-[4px]"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141"
          alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
          className="aspect-square w-[120px] rounded-[4px]"
        />
      </InfiniteSlider>

      <InfiniteSlider direction="vertical" reverse>
        <img
          src="https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645"
          alt="DAYS BEFORE RODEO - Travis Scott"
          className="aspect-square w-[120px] rounded-[4px]"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e02d3e668d0c74720c8c23978e3"
          alt="You're in My System - TORYONTHEBEAT"
          className="aspect-square w-[120px] rounded-[4px]"
        />
      </InfiniteSlider>
    </div>
  );
};

const Sliders = () => {
  return (
    <div>
      <InfiniteSliderBasic />
      <InfiniteSliderHoverSpeed />
      <InfiniteSliderVertical />
    </div>
  );
};

export default Sliders;
