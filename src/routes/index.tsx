import { createFileRoute } from "@tanstack/react-router";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-[1280px] px-6 pt-24 pb-16">
        <h1 className="text-center font-bold tracking-tight text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          Your recruiting
          <br />
          workflow. One platform.
        </h1>
        <div className="mt-16">
          <WorkflowDiagram />
        </div>
      </section>
    </div>
  );
}
