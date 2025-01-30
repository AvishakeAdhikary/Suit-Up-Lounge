import { ModeToggle } from "@/components/mode-toggle";


export default function Home() {
  return (
    <div className="flex w-full h-full p-8 gap-8 justify-center items-center flex-col">
      <ModeToggle></ModeToggle>
      <div className="font-alfphabet">Welcome to</div>
      <div className="font-lobster text-5xl">Suit-Up Lounge</div>
      <iframe src="https://discord.com/widget?id=1282080392039370854&theme=dark" width="350" height="500" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" className="rounded"/>
      <div>Created by <a href="https://avishakeadhikary.github.io/">Avishake Adhikary</a></div>
    </div>
  );
}
