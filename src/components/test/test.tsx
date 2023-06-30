import { component$ } from "@builder.io/qwik";
import { Form, globalAction$ } from "@builder.io/qwik-city";

export const useAction = globalAction$((data) => {
  console.log(data);
  return true;
});

export default component$(() => {
  const action = useAction();
  return (
    <div>
      <h1 class="text-2xl font-bold">Test</h1>
      <Form action={action}>
        <label>Name: </label>
        <input type="text" name="name" />
        <br />
        <button type="submit" class="mt-2 rounded-2xl bg-sky-200 p-2">
          Send
        </button>
      </Form>
    </div>
  );
});
