"use client";
import { useEffect, useState } from "react";

const Home = () => {
  const [task, setTask] = useState<string>("");
  const [listTask, setListTask] = useState<string[]>([]);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setListTask((prevTask) => [task, ...prevTask]);
    setTask("");
  };

  return (
    <main>
      <form onSubmit={handleOnSubmit}>
        <input
          className="text-black"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="task"
        />
      </form>

      {/* list task  */}
      <div>
        {listTask.length > 0 &&
          listTask.map((task, index) => (
            <div className="he" key={index}>
              <h2>{task}</h2>
            </div>
          ))}
      </div>
      {/* list task  */}
    </main>
  );
};

export default Home;
