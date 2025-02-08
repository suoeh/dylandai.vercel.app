import Image from "../media/background.png"
export default function Background() {
  return (
    <div 
      className="w-screen h-screen bg-center bg-cover bg-no-repeat -z-10"
      style={{
        backgroundImage: `url(${Image.src})`,
        height: '300%'
      }}
    />
  )
}
  
  