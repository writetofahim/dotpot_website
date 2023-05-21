import "quill/dist/quill.snow.css";
import React from "react";
import { useQuill } from "react-quilljs";

function HtmlEditor({ value, setValue, isEditMode }) {
  const { quill, quillRef } = useQuill();
  //   const [value, setValue] = useState();

  React.useEffect(() => {
    if (quill && isEditMode) {
      console.log("editMode");
      quillRef.current.firstChild.innerHTML = value;
    }
  }, [isEditMode]);

  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setValue(quillRef.current.firstChild.innerHTML);
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
