import type { RequestOption } from "@modern-js/runtime/server";

interface IResponse {
  message: string;
  key: string;
}

export const post = async ({
  data,
}: RequestOption<
  Record<string, string>,
  Record<string, string>
>): Promise<IResponse> => {
  const { email, password } = data;
  const request = await fetch(`${process.env.API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const response: IResponse = await request.json();
  return response;
};
