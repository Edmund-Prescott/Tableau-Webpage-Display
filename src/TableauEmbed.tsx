import React, { useEffect, useRef } from "react";

const TableauEmbed: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const divElement = containerRef.current;
    if (!divElement) return;

    // Create <object> for Tableau
    const vizElement = document.createElement("object");
    vizElement.className = "tableauViz";
    vizElement.style.display = "none";

    // Tableau embed params
    const params = [
      { name: "host_url", value: "https%3A%2F%2Fpublic.tableau.com%2F" },
      { name: "embed_code_version", value: "3" },
      { name: "site_root", value: "" },
      { name: "name", value: "Edmund_Prescott_Getting_Started_with_Tableau/Sheet1" },
      { name: "tabs", value: "no" },
      { name: "toolbar", value: "yes" },
      { name: "animate_transition", value: "yes" },
      { name: "display_static_image", value: "yes" },
      { name: "display_spinner", value: "yes" },
      { name: "display_overlay", value: "yes" },
      { name: "display_count", value: "yes" },
      { name: "language", value: "en-US" },
    ];

    params.forEach(p => {
      const paramEl = document.createElement("param");
      paramEl.setAttribute("name", p.name);
      paramEl.setAttribute("value", p.value);
      vizElement.appendChild(paramEl);
    });

    divElement.innerHTML = ""; // clear if rerender
    divElement.appendChild(vizElement);

    // Load Tableau JS API
    const scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode?.insertBefore(scriptElement, vizElement);

    // Resize logic
    vizElement.style.width = "100%";
    vizElement.style.height = divElement.offsetWidth * 0.75 + "px";
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", position: "relative", minHeight: "600px" }}
    />
  );
};

export default TableauEmbed;
