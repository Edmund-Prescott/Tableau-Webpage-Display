import React, { useEffect, useRef } from "react";

const TableauEmbed: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const vizRef = useRef<HTMLObjectElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear previous content
    container.innerHTML = "";

    // Create Tableau <object>
    const viz = document.createElement("object");
    viz.className = "tableauViz";
    viz.style.width = "100%";
    viz.style.height = "100%";
    vizRef.current = viz;

    // Tableau parameters
    const params = [
      { name: "host_url", value: "https%3A%2F%2Fpublic.tableau.com%2F" },
      { name: "embed_code_version", value: "3" },
      { name: "site_root", value: "" },
      { name: "name", value: "Edmund_Prescott_Getting_Started_with_Tableau/Sheet1" },
      { name: "tabs", value: "no" },
      { name: "toolbar", value: "no" },
      { name: "animate_transition", value: "no" },
      { name: "display_static_image", value: "no" },
      { name: "display_spinner", value: "no" },
      { name: "display_overlay", value: "no" },
      { name: "display_count", value: "no" },
      { name: "language", value: "en-US" },
    ];

    params.forEach((p) => {
      const paramEl = document.createElement("param");
      paramEl.setAttribute("name", p.name);
      paramEl.setAttribute("value", p.value);
      viz.appendChild(paramEl);
    });

    container.appendChild(viz);

    // Load Tableau JS API
    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    container.appendChild(script);

    // Resize function: fills container height while keeping width 100%
    const resizeViz = () => {
      if (!viz || !container) return;

      const parentHeight = container.parentElement?.clientHeight || 600;
      const parentWidth = container.parentElement?.clientWidth || 800;

      // Calculate height based on parent flex layout:
      // Fit either height of text section or width-based ratio
      const newHeight = Math.max(parentHeight * 0.6, parentWidth * 0.5);

      viz.style.width = "100%";
      viz.style.height = `${newHeight}px`;
    };

    // Initial resize
    resizeViz();

    // Update on window resize
    window.addEventListener("resize", resizeViz);

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeViz);
    };
  }, []);

  return (
    <>
    <p>Example text</p>
      <div
        ref={containerRef}
        style={{ margin: "0 auto", width: "80%", height: "10%", maxHeight: "100px" }}
      />
    </>
  );
};

export default TableauEmbed;
