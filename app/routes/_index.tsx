import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex container h-auto w-auto">
      <h1>Welcome to Remix</h1>
      <Button>Walter</Button>
    </div>  
  );
}
