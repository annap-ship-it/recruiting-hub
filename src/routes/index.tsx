import { createFileRoute } from "@tanstack/react-router";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-[1280px] px-6 pt-24 pb-16">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[300px_1fr] lg:items-center lg:gap-8">
          <h1 className="text-center lg:text-left font-bold tracking-tight text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Your recruiting
            <br />
            workflow. One platform.
          </h1>
          <WorkflowDiagram />
        </div>
      </section>
    </div>
  );
}
