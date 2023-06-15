import { Button, Header } from "ui";

const getData = async () => {
  const username: { username: string } = {
    username: "Amir",
  };
  const body = JSON.stringify(username);
  const res = await fetch("http://localhost:4000/api/v1/account/sign-in", {
    method: "POST",
    body,
  });

  const data = res.json();
  console.log(res);
  return data;
};

export default async function Page() {
  const data = await getData();
  console.log("DATA", data);

  return (
    <>
      <Header text="Web" />
      <Button />
    </>
  );
}
