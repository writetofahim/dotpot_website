import "quill/dist/quill.snow.css";
import React, { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";

function HtmlEditor({ initialValue, setValue, isEditMode }) {
  const { quill, quillRef } = useQuill();
  const [isInitialValueSet, setIsInitialValueSet] = useState(false);
  const [editMode, setEditMode] = useState(isEditMode);

  useEffect(() => {
    if (quill && editMode && initialValue) {
      quill.clipboard.dangerouslyPasteHTML(initialValue);
      setIsInitialValueSet(true);
    }
  }, [quill, editMode, initialValue]);

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setValue(quillRef.current.firstChild.innerHTML);
        setEditMode(false);
      });
    }
  }, [quill]);

  return (
    <div className="mt-16">
      <div style={{ width: "100%", height: "500px" }}>
        <div ref={quillRef} />
      </div>
    </div>
  );
}

export default HtmlEditor;
