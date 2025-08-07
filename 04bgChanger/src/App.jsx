import { useState } from "react";

function App() {
  const [color, setColor] = useState("thistle");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div
          className="fixed flex flex-wrap justify-center inset-x-0 px-2"
          style={{ bottom: "3rem" }}
        >
          <div
            className="flex justify-center shadow-lg rounded-full "
            style={{
              gap: "16px",
              backgroundColor: "white",
              padding: "14px 38px",
              margin: "0 auto",
              width: "90%",
              justifyContent: "center",

              borderEndEndRadius: "2xl",
            }}
          >
            <button
              onClick={() => setColor("red")}
              className="outline-none  rounded-full text-white shadow-lg"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "14px 23px",
                border: "none",
              }}
            >
              Red
            </button>

            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "14px 23px",
                border: "none",
              }}
            >
              Green
            </button>

            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "14px 23px",
                border: "none",
              }}
            >
              Blue
            </button>

            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{
                backgroundColor: "pink",
                color: "black",
                padding: "14px 23px",
                border: "none",
              }}
            >
              Pink
            </button>

            <button
              onClick={() => setColor("brown")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{
                backgroundColor: "brown",
                color: "white",
                padding: "14px 23px",
                border: "none",
              }}
            >
              Brown
            </button>

            <button
              onClick={() => setColor("white")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{
                backgroundColor: "white",
                color: "black",
                padding: "14px 23px",
              }}
            >
              White
            </button>

            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "14px 23px",
                border: "none",
              }}
            >
              Black
            </button>

            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{
                backgroundColor: "yellow",
                color: "black",
                padding: "14px 23px",
                border: "none",
              }}
            >
              Yellow
            </button>

            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{
                backgroundColor: "purple",
                color: "white",
                padding: "14px 23px",
                border: "none",
              }}
            >
              Purple
            </button>

            <button
              onClick={() => setColor("gray")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{
                backgroundColor: "gray",
                color: "white",
                padding: "14px 23px",
                border: "none",
              }}
            >
              Gray
            </button>

            <button
              onClick={() => setColor("lavender")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{
                backgroundColor: "lavender",
                color: "black",
                padding: "14px 23px",
                border: "none",
              }}
            >
              Lavender
            </button>

            <button
              onClick={() => setColor("lightskyblue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{
                backgroundColor: "lightskyblue",
                color: "black",
                padding: "14px 23px",
                border: "none",
              }}
            >
              Lightskyblue
            </button>

            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{
                backgroundColor: "olive",
                color: "white",
                padding: "14px 23px",
                border: "none",
              }}
            >
              Olive
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
