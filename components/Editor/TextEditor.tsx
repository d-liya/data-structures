import { changePlay, changeTextValue } from "../../redux/EditorSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useSpring, animated } from "react-spring";
import UseAnimations from "react-useanimations";
import playPause from "react-useanimations/lib/playPause";
import { useCompiler } from "../Compiler/Compiler";
import { useGraphicGenerator } from "../Generator/GraphicGenerator";
import { changeElements } from "../../redux/CompilerSlice";
import { FaPlay } from "react-icons/fa";

export default function TextEditor() {
  const { editor, compiler } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const _compiler = useCompiler();
  const _generator = useGraphicGenerator();
  const styles = useSpring({
    opacity: compiler.runTimeStatus === "ERROR" ? 1 : 0,
    x: compiler.runTimeStatus === "ERROR" ? 0 : -400,
  });

  const handleRun = () => {
    dispatch(changePlay());

    const classInstance = _compiler(editor.textValue);
    console.log(classInstance);
    if (classInstance) {
      const elements = _generator(classInstance);
      dispatch(changeElements(elements));
      dispatch(changePlay());
    }
  };
  return (
    <div className="flex flex-1 relative">
      <FaPlay
        onClick={handleRun}
        size={30}
        style={{
          position: "absolute",
          right: 10,
          top: 10,
          color: "rgb(88, 86, 214)",
          cursor: "pointer",
        }}
      />
      <textarea
        className="flex-1 p-5 text-white bg-tintBlack resize-none outline-none text-sm mt-1 rounded-md"
        value={editor.textValue}
        onChange={(e) => dispatch(changeTextValue(e.target.value))}
        // onKeyPress={handleKeyPress}
      />
      <animated.section
        style={styles}
        className="bg-red bottom-0 absolute text-white p-2 rounded-md w-full text-sm"
      >
        <p>{compiler.statusMessege}</p>
      </animated.section>
    </div>
  );
}
