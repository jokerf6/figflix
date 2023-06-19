'use client';
export default function YouTubePlayer (){
    const  id  = window.location.href.split("/").pop();
    console.log(id);
  const embedUrl = `https://www.youtube.com/embed/rBkqVPINHbU`;
  console.log(embedUrl);

  return (
    <div className=" w-screen h-screen">
    <iframe
        width="100%"
        height="100%"
        src={embedUrl}
        title="YouTube Video Player"
        frameBorder="0"
        allowFullScreen
      >

    </iframe>
  
    </div>
  );
};
