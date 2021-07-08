import { changePlay, changeTextValue } from "../../redux/EditorSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useSpring, animated } from "react-spring";
import UseAnimations from "react-useanimations";
import playPause from "react-useanimations/lib/playPause";

export default function TextEditor() {
  const editor = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();
  const style = useSpring({ x: editor.openTab ? 239 : 50 });
  return (
    <animated.div style={style} className="text-editor">
      <UseAnimations
        animation={playPause}
        reverse={editor.play}
        onClick={() => dispatch(changePlay())}
        size={35}
        strokeColor={"white"}
        wrapperStyle={{
          position: "absolute",
          backgroundColor: "rgb(88, 86, 214)",
          right: 10,
          borderRadius: "1rem",
          padding: 5,
        }}
      />
      <textarea
        value={editor.textValue}
        onChange={(e) => dispatch(changeTextValue(e.target.value))}
      />
    </animated.div>
  );
}
