import Receiver from "@/components/view/Receiver";
import Broadcaster from "@/components/view/Broadcaster";
import Info from "@/components/view/Info";

export default function Home() {
	return (
		<main className="flex flex-col bg-background h-screen w-screen justify-center items-center">
			<div className="flex flex-col w-1/2 gap-2">
				<Info />
				<Receiver />
				<Broadcaster />
			</div>
		</main>
	)
}
