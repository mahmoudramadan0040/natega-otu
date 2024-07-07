
import {Button,Link} from "@nextui-org/react";
export default function Home() {
  return (
    <div className="flex flex-col flex-warp items-center justify-center mt-6">
      <Link href="/firstIT" color="foreground" className="w-full m-2 hover:text-sky-400 justify-center">
        <Button className=" w-3/4 p-12 navbarHome hover:bg-zinc-950 text-2xl font-mono font-black" color="red"  variant="bordered" radius="none"  size="lg" >
            IT نتيجة سنةاولــي
        </Button>
      </Link>
      <Link href="/secondIT" color="foreground" className="w-full m-2 hover:text-red-400 justify-center">
        <Button className=" w-3/4 p-12 navbarHome hover:bg-zinc-950 text-2xl font-mono font-black" color="red"  variant="bordered" radius="none"  size="lg" >
            IT نتيجة سنه تانية
        </Button>
      </Link>
      
    </div>
      

  );
}
