import { CrowdCanvas, Skiper39 } from "@/components/ui/skiper-ui/skiper39";

// Using the complete component
const DemoSkiper39 = () => {
  return <Skiper39 />;
};

// Using just the crowd canvas
const CustomCrowd = () => {
  return (
    <div className="relative w-full h-screen">
      <CrowdCanvas src="/images/peeps/image.png" rows={15} cols={7} />
    </div>
  );
};
export { CustomCrowd, DemoSkiper39 };