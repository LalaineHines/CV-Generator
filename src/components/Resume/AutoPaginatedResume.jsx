import React, { forwardRef, useEffect, useRef, useState } from "react";

let A4_HEIGHT_PX;

const updateHeight = () => {
  const width = window.innerWidth;
  if (width >= 1024) {
    // lg
    A4_HEIGHT_PX = 1122;
  } else if (width >= 768) {
    // sm
    A4_HEIGHT_PX = 800;
  } else {
    // xs sau mobil
    A4_HEIGHT_PX = 600;
  }
};

updateHeight();
window.addEventListener("resize", updateHeight);

const AutoPaginatedResume = forwardRef(({ children }, ref) => {
  const containerRef = useRef(null);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = Array.from(containerRef.current.children);
    let currentPage = [];
    let currentHeight = 0;
    const newPages = [];

    elements.forEach((el, index) => {
      const elHeight = el.scrollHeight;

      // dacă elementul nu încape pe pagina curentă, trecem pe una nouă
      if (currentHeight + elHeight > A4_HEIGHT_PX) {
        newPages.push(currentPage);
        currentPage = [];
        currentHeight = 0;
      }

      // aici nu mai facem outerHTML, păstrăm direct copilul JSX
      currentPage.push(children[index]);
      currentHeight += elHeight;
    });

    if (currentPage.length > 0) {
      newPages.push(currentPage);
    }

    setPages(newPages);
  }, [children]);

  return (
    <div>
      <div ref={containerRef} className="print-container absolute invisible">
        {children}
      </div>

      <div ref={ref} className="print-container mx-auto">
        {pages.map((pageChildren, idx) => (
          <div
            key={idx}
            className={`page bg-white w-[210mm] max-w-full min-h-[159mm] md:min-h-[212mm] lg:min-h-[297mm] shadow-lg mx-auto p-10 ${
              idx === pageChildren.length ? "mb-0" : "mb-6"
            }`}
          >
            {pageChildren}
          </div>
        ))}
      </div>
    </div>
  );
});

export default AutoPaginatedResume;