"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateValue } from "@/redux/features/counterSlice";
import useGetUsers from "./hooks/api/useGetUsers";

export default function Home() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();
  const { data } = useGetUsers(0);

  return (
    <div style={{ marginBottom: "4rem", textAlign: "center" }}>
      <h4 style={{ marginBottom: 16 }}>{count}</h4>
      <button onClick={() => dispatch(updateValue("ADD"))}>increment</button>
      <button
        onClick={() => dispatch(updateValue("SUB"))}
        style={{ marginInline: 16 }}
      >
        decrement
      </button>
      <button onClick={() => dispatch(updateValue("RESET"))}>reset</button>

      <br />
      <br />
      {data?.map((post, index) => (
        <div key={post.name}>
          <p>
            {post.name} - {post.owner}
          </p>
        </div>
      ))}
    </div>
  );
}
