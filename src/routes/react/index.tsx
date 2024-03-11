import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Display } from "~/components/display";
import { QButton } from "~/components/qbutton";

export default component$(() => {
  const count = useSignal(0);
    return (
      <main>
        <QButton
          onClick$={() => {
            console.log('click', count.value);
            count.value++;
          }}
        >
          +1
        </QButton>
        <Display count={count.value}></Display>
      </main>
    );
});

export const head: DocumentHead = {
  title: "Qwik React",
};
