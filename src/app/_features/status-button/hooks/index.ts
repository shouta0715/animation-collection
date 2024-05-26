import { useMutation } from "@tanstack/react-query";

const fetchDemo = async (ms = 3000) => {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

  return Math.random();
};

export function useStatusButton() {
  const { status, mutate } = useMutation({
    mutationFn: fetchDemo,
  });

  return { status, mutate };
}
