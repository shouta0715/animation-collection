import { useMutation } from "@tanstack/react-query";

const fetchDemo = async (ms = 3000) => {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

  const isError = Math.random() > 0.5;

  if (isError) throw new Error("Error");

  return true;
};

export function useStatusButton() {
  const { status, mutate } = useMutation({
    mutationFn: fetchDemo,
  });

  return { status, mutate };
}
