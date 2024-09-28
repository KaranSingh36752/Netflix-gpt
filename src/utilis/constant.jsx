export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const AVATAR =
  "https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+ import.meta.env.VITE_APP_TMBD_KEY,
  },
};

export const IMG_URL_POSTER = "https://image.tmdb.org/t/p/w1280";

export const otherOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer " + import.meta.env.VITE_APP_TMBD2_KEY,
  }
};


export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_medium.jpg"

export const SUPPORTED_LANG = [{identifier : "en",name:"En"},{identifier : "hin",name:"Hin"},]

export const GENAI_KEY = import.meta.env.VITE_APP_GENAPI_KEY;

export const BG_COLOR_IMG = "https://www.gimp.org/tutorials/Digital_Black_and_White_Conversion/rgb-lightness.png"